import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firebase from '../../services/firebaseConnection';
import {ContainerPrincipal, Lista} from './styles';
import ListaFilmes from '../../components/ListaFilmes';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Inicio(){
    const [verInstagram, setVerInstagram] = useState([]);

    useEffect(()=>{
        async function carregarLista(){
            await firebase.database().ref('usuario')            
            .on('value', (snapshot)=>{
                setVerInstagram([]);
                
                snapshot.forEach((childItem) => {
                    let list = {
                        key: childItem.key,
                        usuario: childItem.val().nome
                    };                

                    setVerInstagram(oldArray => [...oldArray, list]);
                })
            })
        }
        carregarLista();
    }, []);
    
    return(
        <ContainerPrincipal>
            <View style={{backgroundColor: 'blue', width: '100%', height:'15%'}}>              
            </View>            
            <View style={{backgroundColor: 'white', flex: 1, width: '100%', height:'85%',  alignItems: 'center',}}>
                <View style={styles.containerImagem}>
                <Text>foto</Text>
                </View>
                <View>                    
                    <Text style={{fontSize: 30}}>
                        ELIAS CHOI
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={styles.containerLinks}>                        
                        <Icon name="logo-instagram" size={50}/>
                        <Text>Instagram</Text>                        
                    </View>
                    <View style={styles.containerLinks}>
                        <Icon name="md-logo-facebook" size={50}/>
                        <Text>Facebook</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={styles.containerLinks}>
                        <Icon name="md-logo-linkedin" size={50}/>
                        <Text>Linkedin</Text>
                    </View>
                    <View style={styles.containerLinks}>
                        <Icon name="md-logo-linkedin" size={50}/>
                        <Text>Horóscopo</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={styles.containerLinks}>
                        <Icon name="logo-whatsapp" size={50}/>
                        <Text>WhatsApp</Text>
                    </View>
                    <View style={styles.containerLinks}>
                        <Icon name="book-sharp" size={50}/>
                        <Text>Currículo</Text>
                    </View>
                </View>
            </View>            
            

           

        </ContainerPrincipal>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",        
    },

    containerImagem:{        
        borderRadius: 100,        
        alignItems:"center",
        justifyContent: 'center',
        width: 150,
        height: 150,
        marginTop: -75,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 1,
    },

    containerLinks:{
        width: 150,
        height: 100,
        //backgroundColor: 'grey',
        margin: 25,
        alignItems: 'center',
    },

    titulo:{
        fontSize:50,     
        color:"white",        
    }
});