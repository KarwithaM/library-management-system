import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto'; // Make sure this path matches your DTO location
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // We will create this shortcut next, but for now let's use the raw guards
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

// Note: For simplicity in this step, we are applying the guards directly. 
// In a larger app, we'd create a combined JwtAuthGuard, but let's stick to the basics first.
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  // PROTECTED ROUTE: Requires a valid JWT AND the LIBRARIAN role
  @Post()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('LIBRARIAN')
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }
}