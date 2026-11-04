import { Module, Global } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Global() // 👈 THIS IS THE MAGIC: Makes PrismaService available everywhere!
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
