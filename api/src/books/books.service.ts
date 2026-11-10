import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.book.findMany({
      include: { genre: true, reviews: true },
    });
  }

  // ADDED THIS METHOD
  create(dto: CreateBookDto) {
    return this.prisma.book.create({
      data: dto,
    });
  }
}