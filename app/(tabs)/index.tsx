import React, {useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet, Alert, ScrollView} from 'react-native';

export default function App() {
    const [pressedCount, setPressedCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [boxes, setBoxes] = useState([{width: 100, height: 100, color: 'red'}]);
    const [boxSize, setBoxSize] = useState({width: '100', height: '100', color: 'blue'});

    const handlePress = () => {
        if (pressedCount >= 2) {
            setIsDisabled(true);
        }
        setPressedCount(pressedCount + 1);
    };

    const resetButton = () => {
        setPressedCount(0);
        setIsDisabled(false);
    };

    const handleSubmitName = () => {
        setSubmittedName(name);
    };

    const handleLogin = () => {
        if (login !== 'admin' || password !== 'password') {
            setLoginError('Неверный логин или пароль');
        } else {
            setIsLoggedIn(true);
            setLoginError('');
        }
    };

    const addBox = () => {
        setBoxes([...boxes, {...boxSize, width: parseInt(boxSize.width), height: parseInt(boxSize.height)}]);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.title}>Button Example</Text>
                    <Text style={styles.text}>
                        {pressedCount > 0 ? `Кнопка была нажата ${pressedCount} раз!` : 'Нажми на кнопку'}
                    </Text>
                    <Button
                        title="Клик"
                        onPress={handlePress}
                        disabled={isDisabled}
                    />
                    <Button title="Сбросить" onPress={resetButton}/>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>TextInput Example</Text>
                    <Text>Current Input: {name}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Введите имя"
                        onChangeText={text => setName(text)}
                    />
                    <Button title="Подтвердить" onPress={handleSubmitName}/>
                    {submittedName ? <Text style={styles.text}>Ваше имя: {submittedName}</Text> : null}
                </View>

                <View style={styles.section}>
                    {isLoggedIn ? (
                        <Text style={styles.welcome}>Добро пожаловать!</Text>
                    ) : (
                        <>
                            <Text style={styles.title}>Форма входа</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Login"
                                onChangeText={text => setLogin(text)}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={text => setPassword(text)}
                            />
                            {loginError ? <Text style={styles.error}>{loginError}</Text> : null}
                            <Button title="Login" onPress={handleLogin}/>
                        </>
                    )}
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>Box Component</Text>
                    <View style={styles.boxContainer}>
                        {boxes.map((box, index) => (
                            <Box key={index} width={box.width} height={box.height} color={box.color}/>
                        ))}
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Width"
                        keyboardType="numeric"
                        onChangeText={text => setBoxSize({...boxSize, width: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Height"
                        keyboardType="numeric"
                        onChangeText={text => setBoxSize({...boxSize, height: text})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Color"
                        onChangeText={text => setBoxSize({...boxSize, color: text})}
                    />
                    <Button title="Добавить" onPress={addBox}/>
                </View>
            </View>
        </ScrollView>
    );
}

const Box = ({width, height, color}) => {
    return <View style={{width, height, backgroundColor: color, margin: 10}}/>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        marginVertical: 10,
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    welcome: {
        fontSize: 24,
        color: 'green',
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
