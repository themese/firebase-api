import { Injectable } from "@nestjs/common";
import { Task } from "src/models/task";

@Injectable()
export class TaskService {
  async getTask(): Promise<Task> {
    const task: Task = {
      id: '1',
      description: 'desc',
      name: 'task1,'
    };
    return task;
  }
}