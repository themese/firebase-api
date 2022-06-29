import { Module } from "@nestjs/common";
import { TaskRepositoryImpl } from "src/repositories/implementations/task.repository_impl";
import { TaskRepositorySymbol } from "src/repositories/interfaces/task.repository";

@Module({
  providers: [
    {
      provide: TaskRepositorySymbol,
      useClass: TaskRepositoryImpl,
    }
  ],
  exports: [
    TaskRepositorySymbol,
  ],
})
export class RepositoriesModule {}