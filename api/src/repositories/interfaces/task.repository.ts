import { NewTask, Task } from "src/models/task";

export const TaskRepositorySymbol = Symbol.for('TaskRepository');

export interface TaskRepository {
  getTask(id: string): Promise<Task>;
  getTasks(): Promise<Task[]>;
  createTask(newTask: NewTask): Promise<void>;
  updateTask(updateTask: Task): Promise<void>;
  deleteTask(id: string):Promise<void>;
}
