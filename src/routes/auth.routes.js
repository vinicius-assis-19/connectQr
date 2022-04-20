import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../pages/login';

const Tab = createBottomTabNavigator();

const AuthRoutes = () => (
    <Tab.Navigator>    
        <Tab.Screen options={{tabBarVisible: false}} name="Login" component={Login} />
    </Tab.Navigator>
);

export default AuthRoutes;