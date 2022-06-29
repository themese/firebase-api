import { initializeApp } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { Task } from "src/models/task";


// todo authentication/point to my firebase account
export class TaskRepository {
  async getTask(): Promise<Task> {
    initializeApp();
    const db = getFirestore();
    const snapshot = await db.collection('tasks').get();
    return snapshot[0].data();
  }
}