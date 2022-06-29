import { Inject, Injectable } from "@nestjs/common";
import { NewTask, Task } from "src/models/task";
import { TaskRepository, TaskRepositorySymbol } from "src/repositories/interfaces/task.repository";

export const TaskServiceSymbol = Symbol.for('TaskService');

@Injectable()
export class TaskService {
  constructor(
    @Inject(TaskRepositorySymbol)
    private readonly taskRepository: TaskRepository,
  ) { }
  async getTask(id: string) {
    return await this.taskRepository.getTask(id);
  }
  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.getTasks();
  }
  async createTask(newTask: NewTask) {
    return await this.taskRepository.createTask(newTask);
  }
  async updateTask(task: Task) {
    return await this.taskRepository.updateTask(task);
  }
  async deleteTask(id: string) {
    return await this.taskRepository.removeTask(id);
  }
}