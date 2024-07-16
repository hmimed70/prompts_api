import { NestFactory } from '@nestjs/core';
import { promptsModule } from './prompts/prompts.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() { 
  const app = await NestFactory.create(promptsModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();
