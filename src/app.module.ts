import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstacionController } from './estacion/estacion.controller';
import { EstacionService } from './estacion/estacion.service';

@Module({
  imports: [],
  controllers: [AppController, EstacionController],
  providers: [AppService, EstacionService],
})
export class AppModule {}
