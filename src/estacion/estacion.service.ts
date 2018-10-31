import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class EstacionService {
  private planetas: any;
  private readonly filePath: string = 'public/planetas.json';

  constructor() {
    this.planetas = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  findAll(): any {
    return this.planetas.images;
  }

  findByPlanet(planet: string): object {
    return this.planetas.images[planet];
  }
}
