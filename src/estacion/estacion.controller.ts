import { Controller, Get } from '@nestjs/common';
import { EstacionService } from './estacion.service';

@Controller('planetas')
export class EstacionController {
  constructor(private readonly estacion: EstacionService){}
  @Get()
  findAll(){
    return this.estacion.findAll();
  }
}
