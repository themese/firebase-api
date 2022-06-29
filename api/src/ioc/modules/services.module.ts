import { Module } from "@nestjs/common";
import { TaskServiceSymbol, TaskService } from "src/services/task.service";
import { RepositoriesModule } from "./repositories.module";

@Module({
  imports: [RepositoriesModule],
  providers: [
    {
      provide: TaskServiceSymbol,
      useClass: TaskService,
    },
  ],
  exports: [
    TaskServiceSymbol,
  ]
})
export class ServicesModule { }