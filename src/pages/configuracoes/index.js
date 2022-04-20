import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, Button} from 'react-native';
import firebase from '../../services/firebaseConnection';

export default function Configuracoes(){
    
    const[instagram, setInstagram] = useState('');

    async function registrarInstagram(){  
        if(instagram!==''){      
            Keyboard.dismiss();
            let key = await firebase.database().ref('instagram').push().key;
            await firebase.database().ref('instagram').child(key).set({
                instagram:instagram
            })      
            setInstagram('');
        }
    }    
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Configurações</Text>
            <Text>Nome do usuário</Text>
            <TextInput
                style={styles.campoInput}
                placeholder='Nome do usuario'                
            />
            <Text>Instagram</Text>
            <TextInput
                style={styles.campoInput}
                placeholder='Instagram'
                value={instagram}
                onChangeText={(text)=>setInstagram(text)}
            />            

            <View style={styles.campoArea}>
                <TouchableOpacity style={styles.btnArea}>
                    <Text style={styles.btnTexto}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style={styles.btnArea} onPress={registrarInstagram}>
                    <Text style={styles.btnTexto}>Salvar Alterações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
        alignItems:"center",
    },
    titulo:{
        fontSize: 30,        
    }, 
    campoArea:{
        marginTop:20,        
        flexDirection:"row",
        alignItems:"center",
    },
    campoInput:{
        marginRight:5,        
        width:'80%',
        height:40,
        backgroundColor: 'grey',
    },
    btnArea:{
        backgroundColor:"green"
    },
    btnTexto:{
        color:"blue",
    }
});