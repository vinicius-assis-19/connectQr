import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'
import { AuthProvider } from './src/context/auth';

export default function App(){
  return(                             
    <NavigationContainer>      
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

