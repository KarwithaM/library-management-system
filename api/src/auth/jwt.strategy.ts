import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 1. Tell Passport to look for the token in the "Authorization: Bearer <token>" header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 2. Use the secret from our .env file to verify the signature
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  // 3. If the token is valid, this method runs. 
  // Whatever we return here becomes `req.user` for the rest of the request!
  async validate(payload: { sub: number; email: string; role: string }) {
    // You could add a database check here to ensure the user still exists, 
    // but for now, returning the payload is enough to prove they have a valid token.
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}