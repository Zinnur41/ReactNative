import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import todoStore from '../../src/stores/TodoStore';

const TodoList = observer(() => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        todoStore.addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todo List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new todo..."
                    value={newTodo}
                    onChangeText={setNewTodo}
                />
                <Button title="Add" onPress={handleAddTodo} />
            </View>
            <FlatList
                data={todoStore.todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => todoStore.toggleTodoCompletion(item.id)}>
                            <Text style={item.completed ? styles.completed : styles.todoText}>{item.text}</Text>
                        </TouchableOpacity>
                        <Button title="Delete" onPress={() => todoStore.removeTodo(item.id)} />
                    </View>
                )}
            />
        </View>
    );
});

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    todoText: {
        fontSize: 16,
    },
    completed: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});
