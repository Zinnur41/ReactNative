import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import TaskStore from '../store/TaskStore';

const HomeScreen = () => {
    const [taskTitle, setTaskTitle] = useState('');

    return (
        <View style={styles.container}>
        <TextInput value={taskTitle} onChangeText={setTaskTitle} style={styles.input} placeholder="Enter task" />
    <Button title="Add Task" onPress={() => {
        TaskStore.addTask(taskTitle);
        setTaskTitle('');
    }} />
    <TaskList />
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});

export default HomeScreen;