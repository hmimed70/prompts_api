import { Module } from "@nestjs/common";
import { PromptController } from "./prompts.controller";
import { PromptRepository } from "./prompts.repository";
import { PromptService } from "./prompts.service";
@Module({ 
    controllers: [PromptController],
    
    providers: [PromptService, PromptRepository]
})
export class promptsModule{}