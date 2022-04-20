import React, { useContext} from 'react';
import firebase from '../services/firebaseConnection'
import {
    Alert
} from 'react-native'

const signIn = async(email, password) => {    
    const user = await firebase.auth().signInWithEmailAndPassword(email, password)
    try{
        return user.user
    }catch{        
        let error = user.error        
    return error
    }
}

const signUp = async(email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        let user = userCredential.user
    })
    .then( async (value) =>{
        let uid = value.user.uid;
        await firebase.database().ref('usuario').child(uid).once('value')
        .then((snapshot) =>{
            let data = {
                uid: uid,
                email: snapshot.val().email
            };
            setUsuario(data);
            guardarUsuario(data);
        })

    })
    .catch((error) => {
        let errorCode = error.code
        let errorMessage = error.errorMessage
    })
}

export default {
    signIn,
    signUp,
}