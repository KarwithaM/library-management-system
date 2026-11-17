import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async findAll(genreId?: string, search?: string, page: string = '1', limit: string = '10') {
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    return this.prisma.book.findMany({
      where: {
        ...(genreId && { genreId: Number(genreId) }),
        ...(search && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { author: { contains: search, mode: 'insensitive' } },
          ],
        }),
      },
      include: { genre: true },
      skip,
      take,
    });
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id }, include: { genre: true } });
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);
    return book;
  }

  async create(dto: CreateBookDto) {
    return this.prisma.book.create({ data: dto, include: { genre: true } });
  }

  async update(id: number, dto: UpdateBookDto) {
    await this.findOne(id); // Ensures book exists
    return this.prisma.book.update({ where: { id }, data: dto, include: { genre: true } });
  }

  async remove(id: number) {
    await this.findOne(id); // Ensures book exists
    return this.prisma.book.delete({ where: { id } });
  }
}