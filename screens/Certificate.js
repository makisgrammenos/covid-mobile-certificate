import React,{useEffect,useState} from 'react';
import { View, Text,StyleSheet,Button,Alert ,Image} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import QRCode from 'react-native-qrcode-svg';
import {NativeBaseProvider ,Center,VStack,Heading} from  'native-base';
import { CommonActions } from '@react-navigation/native';


class Certificate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            certificate:null,
            certLoaded:false
        }
        this.ShowAlert = this.ShowAlert.bind(this);
        this.deleteCertificate = this.deleteCertificate.bind(this)
        
    }
   async ShowAlert(){
       await  Alert.alert("Διαγραφή Πιστοποιητικού","Να γίνει διαγραφή του πιστοποιητικού εμβολιασμού;",
        [{text:"Ακύρωση"},{text:"Διαγραφή",onPress:  this.deleteCertificate }])
    }
    async deleteCertificate(){
        const {navigation} = this.props;
        await SecureStore.deleteItemAsync('certificate')
        navigation.dispatch(CommonActions.reset({index:0,routes:[{name:'QRSCAN'}]}))
    }
    componentDidMount(){
       
        SecureStore.getItemAsync('certificate').then(  (value)=>{
            this.setState({certificate:JSON.parse(value)});
           
            this.setState({certLoaded:true});
        });
    }
    render(){
        if (!this.state.certLoaded){
            return(<View>
                <Text>Loading</Text>
            </View>);   
        }
        else{
            console.log(this.state.certificate)
            return(
                <NativeBaseProvider>
                  
                    <View style={styles.container} >
                        <VStack space={5} alignItems='center'>
                        
                        <QRCode value={this.state.certificate.qr} size={200}/>
                        <Text style={styles.nameDesc}>Ονοματεπώνυμο</Text>
                        <Text style={styles.name}>{this.state.certificate.data.first_name_el} {this.state.certificate.data.last_name_el}</Text>
                        <Text style={styles.nameDesc} >Full Name</Text>
                        <Text style={styles.name} >{this.state.certificate.data.first_name_en} {this.state.certificate.data.last_name_en}</Text>
                       
                        
                        </VStack>
                        
                        
                    </View>
                    <View style={styles.buttonCon}>
                        <Button title="Διαγραφη Πιστοποιητικου" style={styles.button} color={"#003476"} onPress={this.ShowAlert}/>
                    </View>
                </NativeBaseProvider>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        justifyContent: 'center',
    },
    name:{
        fontSize:25,
        color: '#003476',
        
    },
    nameDesc:{
        fontSize:18,
    },
    button:{
        
    },
    buttonCon:{   
        marginBottom:30,
        marginRight:10,
        marginLeft:10,

      
      
        
    }
})
export default Certificate;
