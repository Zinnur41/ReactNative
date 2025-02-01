import RealmClient from '../models/RealmClient';
import { Task } from '../models/Task';
import { v4 as uuidv4 } from 'uuid';

class TaskService {
    getTasks(): Task[] {
        return RealmClient.getInstance().objects<Task>('Task') as unknown as Task[];
    }

    createTask(title: string) {
        RealmClient.getInstance().write(() => {
            RealmClient.getInstance().create('Task', {
                id: uuidv4(),
                title,
                completed: false,
            });
        });
    }

    updateTask(id: string, values: Partial<Task>) {
        const realm = RealmClient.getInstance();
        const task = realm.objectForPrimaryKey<Task>('Task', id);
        if (task) {
            realm.write(() => {
                Object.assign(task, values);
            });
        }
    }

    deleteTask(id: string) {
        const realm = RealmClient.getInstance();
        const task = realm.objectForPrimaryKey<Task>('Task', id);
        if (task) {
            realm.write(() => {
                realm.delete(task);
            });
        }
    }
}

export default new TaskService();