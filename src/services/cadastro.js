import React, { useContext} from 'react';
import firebase from '../services/firebaseConnection'
import {
    Alert
} from 'react-native'
import AuthContext from '../context/auth';

export default function CriandoLogin(email){    
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
        let user = userCredential.user                
    })
    .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.errorMessage        
    })
}