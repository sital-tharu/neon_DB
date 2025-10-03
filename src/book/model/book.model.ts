import { ObjectType, Field } from "@nestjs/graphql";
@ObjectType()
export class Book {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    createdAt: Date;

}