import React, { useContext } from 'react';

import {
    Alert
} from 'react-native'
import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';
import AuthContext from '../context/auth';

const Routes = () => {
    const { signed } = useContext(AuthContext);    
    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;