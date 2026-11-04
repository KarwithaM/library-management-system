import { PrismaService } from "../prisma/prisma.service";
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        genre: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        availableCopies: number;
        genreId: number;
        userId: number | null;
    })[]>;
}
