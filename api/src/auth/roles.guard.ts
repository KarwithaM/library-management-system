import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Read the "VIP Sticker" from the route (e.g., @Roles('LIBRARIAN'))
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    // 2. If there's no sticker, let everyone in (public route)
    if (!requiredRoles) {
      return true;
    }

    // 3. Get the user's info (which was attached by the JwtStrategy!)
    const { user } = context.switchToHttp().getRequest();

    // 4. Check if the user's role is in the list of required roles
    const hasRole = requiredRoles.some((role) => user?.role === role);

    if (!hasRole) {
      // Built-in NestJS error that automatically sends a 403 Forbidden status
      throw new ForbiddenException('You do not have permission to access this resource');
    }

    return true;
  }
}