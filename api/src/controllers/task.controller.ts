import { Controller, Get } from "@nestjs/common";
import { Task } from "src/models/task";
import { TaskService } from "src/services/task.service";

@Controller('/tasks/')
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) { }
  @Get()
  async getTasks(): Promise<Task> {
    return await this.taskService.getTask();
  }
}