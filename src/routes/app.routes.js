import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Inicio from '../pages/Inicio';
import Scanner from '../pages/Scanner';
import QRCodeScreen from '../pages/QRCodeScreen';
import Configuracoes from '../pages/configuracoes';
import Login from '../pages/login';

const Tab = createBottomTabNavigator();

const icons ={
  Inicio:{
    name: 'home'
  },
  Scanner:{
    name: 'scan'
  },
  QRCodeScreen:{
    name: 'qr-code-sharp'
  },
  Configuracoes:{
    name: 'settings'
  }
};

const AppRoutes = () => (
    <Tab.Navigator    
    screenOptions={ ({route})=>({
        tabBarIcon: ({color,size})=>{
        const{name} = icons[route.name];
        return<Icon name={name} color={color} size={size} />
        }
    })}  
    tabBarOptions={{
        style:{
        backgroundColor: '#121212'
        },
        activeTintColor: '#FFF',
    }}
    >  
    {/* <Tab.Screen name="Login" component={Login} /> */}
    <Tab.Screen name="Inicio" component={Inicio} />
    <Tab.Screen name="Scanner" component={Scanner} />
    <Tab.Screen name="QRCodeScreen" component={QRCodeScreen} />
    <Tab.Screen name="Configuracoes" component={Configuracoes} />
    </Tab.Navigator>      
);

export default AppRoutes;
