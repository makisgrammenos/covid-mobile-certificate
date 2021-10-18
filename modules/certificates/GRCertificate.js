import React,{useEffect,useState} from 'react';
import { View, Text,StyleSheet,Button,Alert ,Image} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import QRCode from 'react-native-qrcode-svg';
import {NativeBaseProvider ,Center,VStack,Heading} from  'native-base';
import { CommonActions } from '@react-navigation/native';
import { Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { flexWrap } from 'styled-system';


class GRCertificate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            certificate:this.props.certificate,
            certLoaded:false
        }
        // this.ShowAlert = this.ShowAlert.bind(this);
        // this.deleteCertificate = this.deleteCertificate.bind(this)
        
    }
    // componentDidMount(){
    //     this.setState({certificate:this.props.certificate})
    // }
//    async ShowAlert(){
//        await  Alert.alert("Διαγραφή Πιστοποιητικού","Να γίνει διαγραφή του πιστοποιητικού εμβολιασμού;",
//         [{text:"Ακύρωση"},{text:"Διαγραφή",onPress:  this.deleteCertificate }])
//     }
//     async deleteCertificate(){
//         const {navigation} = this.props;
//         await SecureStore.deleteItemAsync('certificate')
//         navigation.dispatch(CommonActions.reset({index:0,routes:[{name:'QRSCAN'}]}))
//     }
//     componentDidMount(){
       
//         SecureStore.getItemAsync('certificate').then(  (value)=>{
//             this.setState({certificate:JSON.parse(value)});
           
//             this.setState({certLoaded:true});
//         });
//     }
    render(){
        
          
            return(
                
                <NativeBaseProvider>
                     
                    <View style={styles.container} >
                        <>
                        <View style={styles.container2}>
                            <View>
                            
                            <Text style={styles.nameDesc}>Ονομα</Text>
                            <Text style={styles.name}>{this.state.certificate.data.first_name_el } {this.state.certificate.data.last_name_el}</Text>
                            </View>
                            {/* <View>
                                <Text style={styles.nameDesc}>Επώνυμο </Text>
                                <Text style={styles.name}>{this.state.certificate.data.last_name_el} </Text>
                            </View> */}

                            <View>
                                <Text style={styles.nameDesc}>Αρ.δόσεων</Text>
                                <Text style={{fontSize:15, color: '#003476',textAlign:'right'}}>{this.state.certificate.data.second_dose!=""?second_dose:1}</Text>
                            </View>
                            {/* <Text style={styles.nameDesc} >Full Name</Text>
                            <Text style={styles.name} >{this.state.certificate.data.first_name_en} {this.state.certificate.data.last_name_en}</Text> */}
                            
                        </View>
                        <View style={styles.container2}>
                            <View>
                                <Text style={styles.nameDesc}>Πρώτη δόση</Text>
                                <Text style={{fontSize:15, color: '#003476'}}>{this.state.certificate.data.first_dose}</Text>
                            </View>
                            <View>
                                <Text style={styles.nameDesc}>Δεύτερη δόση</Text>
                                <Text style={{fontSize:15, color: '#003476'}}>{this.state.certificate.data.second_dose =="" ? "-":this.state.certificate.data.second_dose}</Text>
                            </View>
                        </View>
                        <View style={styles.vaccinetype}>
                            <Text style={styles.nameDesc}>Τυπός Εμβολίου</Text>
                            <Text style={styles.name}>{this.state.certificate.data.vaccine_type}</Text>
                        </View>
                        </>
                        
                        
                    </View>
                    <View style={styles.QR}>
                        <Image source={require("../../assets/GR.png")} style={styles.coat_of_arms}/>
                        <QRCode value={this.state.certificate.qr} size={250}/>
                    </View>
                    <View style={styles.buttonCon}>
                        <Button title="Διαγραφη Πιστοποιητικου" style={styles.button} color={"#003476"} onPress={this.props.deleteCertificate}/>
                    </View>
                </NativeBaseProvider>
            )
        }
    }


const styles = StyleSheet.create({
    container: {
        
        
       
    },
    coat_of_arms:{
        width:100,
        height:100,
        marginBottom:50
    },
    QR:{
        paddingTop:50,
        flex:1,
        alignItems:'center'
    },
    container2:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop:20,
        
        justifyContent: 'space-around',
    },
    vaccinetype:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop:25,
        
        justifyContent: 'center',
    },
    
    name:{
        fontSize:15,
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
export default GRCertificate;
