import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookInput } from './dto/create_bookinput';

@Injectable()
export class BookService {
    constructor(private prisma: PrismaService) {}

    createBook(data:CreateBookInput){
        return this.prisma.book.create({data});
    }
}
