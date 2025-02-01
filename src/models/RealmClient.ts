import Realm, { ObjectSchema } from 'realm';

// Определяем схему Task
export class Task extends Realm.Object<Task> {
    id!: string;
    title!: string;
    completed!: boolean;

    static schema: ObjectSchema = {
        name: 'Task',
        primaryKey: 'id',
        properties: {
            id: 'string',
            title: 'string',
            completed: { type: 'bool', default: false },
        },
    };
}

// Singleton-клиент для работы с Realm
class RealmClient {
    private static instance: Realm | null = null;

    static getInstance(): Realm {
        if (!this.instance) {
            this.instance = new Realm({ schema: [Task] });
        }
        return this.instance;
    }

    static closeInstance(): void {
        if (this.instance) {
            this.instance.close();
            this.instance = null;
        }
    }
}

export default RealmClient;
