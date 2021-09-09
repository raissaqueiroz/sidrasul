import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const { Navigator, Screen, Group  } = createStackNavigator();

const { Navigator: DrawerNavigator, Screen: DrawerScreen  } = createDrawerNavigator();
import colors from '../constants/colors';

import {Register} from '../pages/Register';
import {Login} from '../pages/Login';
import {Contact} from '../pages/Contact';
import {Home} from '../pages/Home';
import {Order} from '../pages/Order';

import {Drawer} from './Drawer';

export const Routes: React.FC = () => (
    <NavigationContainer>
        <Navigator initialRouteName="Login">
            <Screen 
                name="Login" 
                component={Login} 
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name="Register" 
                component={Register} 
                options={{
                    headerShown: false,
                }}   
            />
            <Screen
                name="After" 
                component={Drawer} 
                options={{
                    headerShown: false,
                }}   
            />
        </Navigator>
    </NavigationContainer>
);