import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { PromptService } from './prompts.service';

@Controller('prompts')
export class PromptController {
    
    constructor (public promptService: PromptService) {}
    @Get()
    getAllMessages() {
       return this.promptService.findAll();
    }

    @Get('/:id')
    async getOneMessage( @Param('id') id: string) {
      const message =  await this.promptService.findOne(id);
      if(!message) {
        throw new NotFoundException('message not found');
      }
      return message;
    }

    @Post()
    createMessage(@Body() body: createMessageDto) {
      this.promptService.create(body.prompt, body.name);
    }
}
