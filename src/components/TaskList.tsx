import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import TaskStore from "../store/TaskStore";

const TaskList = observer(() => {
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [newTitle, setNewTitle] = useState("");

    return (
        <ScrollView>
            {TaskStore.tasks.map((task) => (
                <View key={task.id} style={styles.item}>
                    {editingTaskId === task.id ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={newTitle}
                                onChangeText={setNewTitle}
                                autoFocus
                            />
                            <Button
                                title="Save"
                                onPress={() => {
                                    TaskStore.updateTask(task.id, { title: newTitle });
                                    setEditingTaskId(null);
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <Text>{task.title}</Text>
                            <Button
                                title="Update"
                                onPress={() => {
                                    setEditingTaskId(task.id);
                                    setNewTitle(task.title);
                                }}
                            />
                            <Button title="Delete" onPress={() => TaskStore.removeTask(task.id)} />
                        </>
                    )}
                </View>
            ))}
        </ScrollView>
    );
});

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        height: 40,
        flex: 1,
    },
});

export default TaskList;
