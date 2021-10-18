import React from "react";
import { Platform,StatusBar,Image,StyleSheet} from 'react-native';

import {View,Text} from 'react-native'


function CertHeader(props){
    return(
    <View style={styles.header}>
        <Image source={require('../../assets/coatofarms_white.png')} style={styles.logo}/>
        {/* <Text>Ελληνική Δημοκρατία </Text> */}
        <Text>Πιστοποιτικό Eμβολιασμού COVID-19</Text>
    </View>)
}

const styles = StyleSheet.create({
    logo:{
        
        width:50,
        height:50
    },
    header:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 ,
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',

        backgroundColor:"#003476"
    }
})
export default CertHeader;