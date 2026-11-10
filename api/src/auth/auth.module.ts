import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule, // So AuthService can talk to the database
    JwtModule.register({
      // Read the secret from our .env file securely!
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' }, // Wristband expires in 7 days
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // So other modules can use it later if needed
})
export class AuthModule {}