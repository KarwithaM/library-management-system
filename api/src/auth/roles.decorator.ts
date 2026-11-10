import { SetMetadata } from '@nestjs/common';

// This creates a custom decorator we can use like @Roles('LIBRARIAN')
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);