import * as admin from 'firebase-admin'
import { cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { TaskRepository } from "../interfaces/task.repository";
import * as dbKey from "../../utils/db_key.json"
import { NewTask, Task } from 'src/models/task';

export class TaskRepositoryImpl implements TaskRepository {
  private readonly _db: admin.firestore.Firestore;
  constructor() {
    admin.initializeApp({
      credential: cert(dbKey as ServiceAccount),
    });
    this._db = getFirestore();
  }
  async getTask(id: string): Promise<Task> {
    let task: Task;
    const snapshot = await this._db.collection('tasks').get();
    // anyway of not iterating through everything?
    snapshot.forEach((doc) => {
      if (doc.id === id) {
        task = new Task(
          doc.id,
          doc.data().name,
          doc.data().description,
        );
      }
    });
    return task;
  }

  async getTasks(): Promise<Task[]> {
    let tasks: Task[] = [];
    const snapshot = await this._db.collection('tasks').get();
    snapshot.forEach((doc) => {
      tasks.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
      })
    });
    return tasks;
  }
  async createTask(newTask: NewTask): Promise<void> {
    const taskRef = this._db.collection('tasks').doc();
    // how to return the created task? we don't know the id and the set() returns the writeTime
    await taskRef.set({
      name: newTask.name,
      description: newTask.description,
    });
  }
  async updateTask(updateTask: Task): Promise<void> {
    this._db.doc(`tasks/${updateTask.id}`).update({
      id: updateTask.id,
      description: updateTask.description,
      name: updateTask.name,
    });
  }
  async removeTask(id: string): Promise<void> {
    this._db.doc(`tasks/${id}`).delete();
  }
}
