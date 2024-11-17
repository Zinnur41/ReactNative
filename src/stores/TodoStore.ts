import { makeAutoObservable } from 'mobx';

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

class TodoStore {
    todos: TodoItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text: string) {
        if (text.trim() !== '') {
            const newTodo: TodoItem = {
                id: Date.now(),
                text,
                completed: false,
            };
            this.todos.push(newTodo);
        }
    }

    toggleTodoCompletion(id: number) {
        const todo = this.todos.find((item) => item.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter((item) => item.id !== id);
    }
}

const todoStore = new TodoStore();

export default todoStore;