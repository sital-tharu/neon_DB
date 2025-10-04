import { InputType, Field, PartialType } from "@nestjs/graphql";
import { CreateBookInput } from "./create_bookinput";
@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
    @Field()
    id: string;

}