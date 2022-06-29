import { Module } from '@nestjs/common';
import { ControllersModule } from './modules/controllers.module';

@Module({
  imports: [ControllersModule],
})
export class AppModule { }
