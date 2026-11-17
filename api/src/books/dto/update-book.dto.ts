import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

// PartialType automatically makes all fields optional, perfect for PATCH/UPDATE
export class UpdateBookDto extends PartialType(CreateBookDto) {}