import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen, Group  } = createStackNavigator();

import {Register} from '../pages/Register';
import {Login} from '../pages/Login';
import {Drawer} from './Drawer';

export const Stack: React.FC = () => (
    <NavigationContainer>
        <Navigator>
            <Screen
                name="Register" 
                component={Register} 
                options={{
                    headerShown: false,
                }}   
            />
            <Screen 
                name="Login" 
                component={Login} 
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name="Home" 
                component={Drawer} 
                options={{
                    headerShown: false,
                }}   
            />
        </Navigator>
    </NavigationContainer>
);