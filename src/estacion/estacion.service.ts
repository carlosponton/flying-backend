import { Injectable } from '@nestjs/common';
import { Planetas } from './class/planetas';
import * as fs from 'fs';

@Injectable()
export class EstacionService {
  private planetas: Planetas[];
  private readonly filePath: string = 'public/planetas.json';

  constructor() {
    this.planetas = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  findAll(): Planetas[] {
    return this.planetas;
  }
}
