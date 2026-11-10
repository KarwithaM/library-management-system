import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module'; // 👈 1. Import it

@Module({
  imports: [BooksModule, PrismaModule, AuthModule], // 👈 2. Add it to the array
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}