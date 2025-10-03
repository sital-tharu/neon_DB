import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './model/book.model';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
    constructor(private readonly bookService: BookService) { }

    @Query(() => [Book])
    getAllBooks() {
        return this.bookService.findAll()
    }

    @Query(() => Book)
    getBook(@Args('id') id: string) {
        return this.bookService.findOne(id)
    }



}
