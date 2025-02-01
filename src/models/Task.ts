import Realm from 'realm';

export class Task extends Realm.Object<Task> {
    id!: string;
    title!: string;
    completed!: boolean;

    static schema: Realm.ObjectSchema = {
        name: 'Task',
        primaryKey: 'id',
        properties: {
            id: 'string',
            title: 'string',
            completed: 'bool',
        },
    };
}