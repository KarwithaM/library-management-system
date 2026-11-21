import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { GenresModule } from './genres/genres.module';
import { UsersModule } from './users/users.module'; // 👈 1. IMPORT IT HERE

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000, 
          limit: 100,   
        },
      ],
    }),
    BooksModule,
    PrismaModule,
    AuthModule,
    GenresModule,
    UsersModule, // 👈 2. ADD IT TO THE IMPORTS ARRAY HERE
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}