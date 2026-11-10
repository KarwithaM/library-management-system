import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 1. Tell Passport to look for the token in the "Authorization: Bearer <token>" header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      
      // 2. Assert that this is definitely a string to satisfy TypeScript
      secretOrKey: process.env.JWT_SECRET as string, 
    });
  }

  // 3. If the token is valid, this method runs. 
  async validate(payload: { sub: number; email: string; role: string }) {
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}