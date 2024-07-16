import { Injectable } from "@nestjs/common";
import { PromptRepository } from "./prompts.repository";

@Injectable()
export class PromptService {

    constructor (public messageRepo: PromptRepository) { }
    findOne(id: string) {
        return this.messageRepo.findOne(id);
    }
    findAll() {
        return this.messageRepo.findAll();
    }
    create(prompt: string, name: string) {
        return this.messageRepo.create(prompt, name);
    }
}