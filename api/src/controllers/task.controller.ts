import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { NewTask, Task } from "src/models/task";
import { TaskService, TaskServiceSymbol } from "src/services/task.service";

@Controller('/tasks')
export class TaskController {
  constructor(
    @Inject(TaskServiceSymbol)
    private readonly taskService: TaskService
  ) { }
  @Get('/:id')
  async getTask(
    @Param('id') id: string,
  ): Promise<Task> {
    return await this.taskService.getTask(id);
  }
  @Get()
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }
  @Post()
  async createTask(
    @Body('newTask') newTask: NewTask
  ): Promise<void> {
    await this.taskService.createTask(newTask);
  }
  @Put()
  async updateTask(
    @Body('task') task: Task
  ): Promise<void> {
    await this.taskService.updateTask(task);
  }
  @Delete('/:id')
  async deleteTask(
    @Param('id') id: string,
  ): Promise<void> {
    await this.taskService.deleteTask(id);
  }
}