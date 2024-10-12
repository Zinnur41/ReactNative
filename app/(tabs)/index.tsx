import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Экраны для Home Stack
const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
};

const HomeAboutScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>About the App</Text>
        </View>
    );
};

// Другие экраны табов
const NewsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>News Screen</Text>
    </View>
);

const ChatScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat Screen</Text>
    </View>
);

const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
    </View>
);

// Создание стека для Home
const Stack = createNativeStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerLeft: () => (
                        <Ionicons name="home" size={24} color="black" style={{ marginLeft: 10 }} />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('HomeAbout')}
                            title="О приложении"
                        />
                    ),
                })}
            />
            <Stack.Screen
                name="HomeAbout"
                component={HomeAboutScreen}
                options={{ title: 'About the App' }}
            />
        </Stack.Navigator>
    );
};

// Табы навигации
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'News') {
                        iconName = 'newspaper-outline';
                    } else if (route.name === 'Chat') {
                        iconName = 'chatbubble-outline';
                    } else if (route.name === 'Settings') {
                        iconName = 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

// Главный компонент приложения
export default function App() {
    return (
        <NavigationContainer independent={true}>
            <TabNavigation />
        </NavigationContainer>
    );
}
