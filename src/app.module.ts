import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BooksModule } from "./books/books.module";
import { PrismaModule } from "./prisma/prisma.module"; // 👈 1. Import the module

@Module({
  imports: [BooksModule, PrismaModule], // 👈 2. Add it to imports
  controllers: [AppController],
  providers: [AppService], // 👈 3. We can remove PrismaService from here now!
})
export class AppModule {}
