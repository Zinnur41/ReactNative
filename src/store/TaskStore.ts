import { makeAutoObservable } from 'mobx';
import TaskService from '../services/TaskService';
import { Task } from '../models/Task';

class TaskStore {
    tasks: Task[] = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchTasks();
    }

    fetchTasks() {
        this.tasks = TaskService.getTasks();
    }

    addTask(title: string) {
        TaskService.createTask(title);
        this.fetchTasks();
    }

    updateTask(id: string, values: Partial<Task>) {
        TaskService.updateTask(id, values);
        this.fetchTasks();
    }

    removeTask(id: string) {
        TaskService.deleteTask(id);
        this.fetchTasks();
    }
}

export default new TaskStore();