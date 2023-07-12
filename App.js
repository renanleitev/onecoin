import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OneCoin from './src/pages/OneCoin';
import SupportPage from './src/pages/SupportPage';
import 'expo-dev-client';

export default function App() {
    // Para realizar a navegação pelo aplicativo
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="OneCoin" component={OneCoin} />
                <Stack.Screen name="Support" component={SupportPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}