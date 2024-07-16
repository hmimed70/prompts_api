import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class PromptRepository {
    async findOne(id: string) {
      const contents = await readFile('prompts.json', 'utf8');
      const prompts = JSON.parse(contents);
      return prompts[id];
    }

    async findAll() {   
        const contents = await readFile('prompts.json', 'utf8');
        const prompts = JSON.parse(contents);
        return prompts;
    }

    async create(prompt: string, name: string) {   
        const contents = await readFile('prompts.json', 'utf8');
        const prompts = JSON.parse(contents);
        const id = Math.floor(Math.random() * 1000000).toString();
        prompts[id] = { id, prompt, name };
        await writeFile('prompts.json', JSON.stringify(prompts));
    }
}