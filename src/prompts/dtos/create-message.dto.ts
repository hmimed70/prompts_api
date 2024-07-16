import { IsString } from "class-validator";

export class createMessageDto {
    @IsString()
    prompt: string;

    @IsString()
    name: string
}