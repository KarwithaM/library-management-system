import { Controller, Get } from "@nestjs/common";
import { BooksService } from "./books.service";

@Controller("books")
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async findAll() {
    return this.booksService.findAll();
  } // Closes the findAll method
} // Closes the BooksController class
