import { Module } from "@nestjs/common";
import { TaskController } from "src/controllers/task.controller";
import { ServicesModule } from "./services.module";

@Module({
  imports: [ServicesModule],
  controllers: [TaskController],
  providers: [],
})
export class ControllersModule { }