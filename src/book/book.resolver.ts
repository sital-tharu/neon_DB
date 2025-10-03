import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './model/book.model';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create_bookinput';
import { UpdateBookInput } from './dto/update_bookinput';

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

    @Mutation(() => Book)
    createBook(@Args('input') input: CreateBookInput) {
        return this.bookService.createBook(input);
    }

    @Mutation(() => Book)
    updateBook(@Args('input') input: UpdateBookInput) {
        return this.bookService.update(input);
    }

    @Mutation(() => Book)
    deleteBook(@Args('id') id: string) {
        return this.bookService.remove(id);
    }

}
