import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import TaskStore from '../store/TaskStore';

const TaskList = observer(() => {
    return (
        <ScrollView>
            {TaskStore.tasks.map((task) => (
                <View key={task.id} style={styles.item}>
                    <Text>{task.title}</Text>
                    <Button title="Complete" onPress={() => TaskStore.updateTask(task.id, { completed: true })} />
                    <Button title="Delete" onPress={() => TaskStore.removeTask(task.id)} />
                </View>
            ))}
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
});

export default TaskList;