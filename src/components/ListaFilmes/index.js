import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextoLista, ContainerLista} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from '../../services/firebaseConnection';

export default function ListaFilmes({data,filmeAssistido}){
    /*
    const[filme, setFilme] = useState('');

    async function filmeAssistido(key){     

        await firebase.database().ref('filmesAssistidos').child(key).set({
            filme:data.filme})
        await firebase.database().ref('filmes').child(key).remove();   
    }

    return(
        <ContainerLista>
            <TextoLista>
                {data.filme}                
            </TextoLista>   
            <TouchableOpacity onPress={() => filmeAssistido(data.key, data.filme)}>
                < Icon name="checkmark-outline" size={30} color={"white"}/>
            </TouchableOpacity>
        </ContainerLista>
    );
    */
}