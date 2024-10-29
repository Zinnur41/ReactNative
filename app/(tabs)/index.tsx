import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {Is} from "@sinclair/typebox/value/is";
import Date = Is.Date;

export default function App() {
    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim()) {
            setTodoList([...todoList, { id: Date.now(), text, completed: false }]);
            setText('');
        }
    };

    const toggleComplete = (id) => {
        setTodoList(todoList.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const renderTodoItem = ({ item }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => toggleComplete(item.id)}>
                <Text style={[styles.todoText, item.completed && styles.completedText]}>
                    {item.text}
                </Text>
            </TouchableOpacity>
            <Button title="Удалить" onPress={() => deleteTodo(item.id)} color="red" />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO List</Text>
            <TextInput
                style={styles.input}
                placeholder="Добавить задачу"
                value={text}
                onChangeText={setText}
            />
            <Button title="Добавить" onPress={addTodo} />

            <FlatList
                data={todoList}
                keyExtractor={item => item.id.toString()}
                renderItem={renderTodoItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 5,
        borderRadius: 5,
    },
    todoText: {
        fontSize: 16,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});
