import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BooksService {
  // Nest will automatically hand us the PrismaService here!
  constructor(private prisma: PrismaService) {}

  // This method fetches all books from the database
  async findAll() {
    return this.prisma.book.findMany({
      include: { genre: true }, // This also fetches the genre details for each book!
    });
  }
}
