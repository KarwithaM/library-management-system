import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @Get('profile')
  @UseGuards(JwtAuthGuard) // 👈 Only logged-in users can see their profile
  getProfile(@Req() req: Request) {
    // req.user is populated by the JwtStrategy!
    return {
      message: 'This is your protected profile',
      user: req.user, 
    };
  }
}