import { IsString, IsInt, Min } from 'class-validator';

export class CreateBookDto {
  @IsString() title: string;
  @IsString() author: string;
  @IsString() isbn: string;
  @IsInt() @Min(1) totalCopies: number;
  @IsInt() genreId: number;
}