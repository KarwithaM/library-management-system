import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
