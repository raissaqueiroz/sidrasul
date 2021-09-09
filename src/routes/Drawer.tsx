import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { Navigator, Screen  } = createDrawerNavigator();

import colors from '../constants/colors';

import {Login} from '../pages/Login';
import {Contact} from '../pages/Contact';
import {Home} from '../pages/Home';
import {Order} from '../pages/Order';

export const Drawer: React.FC = () => (
    <Navigator initialRouteName="Home">
        <Screen
            options={({ navigation }) => ({
                title: 'Página Inicial',
                headerStyle: {
                    backgroundColor: colors.primary,
                    zIndex: 999
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            })}
            name="Home" 
            component={Home}
        />
    
        <Screen
            options={({ navigation }) => ({
                title: 'Meus Pedidos',
                headerStyle: {
                    backgroundColor: colors.primary,
                    zIndex: 999
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            })}
            name="Pedidos" 
            component={Order}
        />
        <Screen
            options={({ navigation }) => ({
                title: 'Ouvidoria',
                headerStyle: {
                    backgroundColor: colors.primary,
                    zIndex: 999
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
            })}
            name="Contact" 
            component={Contact}
        />
    </Navigator>
);