import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        id: number;
        name: string | null;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            name: string | null;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
}
