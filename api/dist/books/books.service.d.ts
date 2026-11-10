import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        genre: {
            id: number;
            name: string;
            slug: string;
        };
        reviews: {
            id: number;
            userId: number;
            rating: number;
            comment: string;
            bookId: number;
        }[];
    } & {
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        id: number;
        availableCopies: number;
        userId: number | null;
    })[]>;
    create(dto: CreateBookDto): import(".prisma/client").Prisma.Prisma__BookClient<{
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        id: number;
        availableCopies: number;
        userId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
