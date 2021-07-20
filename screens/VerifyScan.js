import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet,Button,Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {NativeBaseProvider ,Center,VStack,Heading} from  'native-base';
function VerifyScan({route,navigation}) {
    const {data} = route.params;
    
    return(
        <NativeBaseProvider>
        {/* <Heading size={'md'} style={{alignItems:'center'}}>Βεβαίωση Εμβολιασμού COVID-19</Heading> */}
        <View style={styles.container}>
           
                  
                    <VStack space={5} alignItems={'center'}>
                        
                            <Text style={styles.nameDesc}>Ονοματεπώνυμο</Text>
                            <Text style={styles.name}>{data.data.first_name_el} {data.data.last_name_el}</Text>
                            <Text style={styles.nameDesc} >Full Name</Text>
                            <Text style={styles.name} >{data.data.first_name_en} {data.data.last_name_en}</Text>
                       
                    </VStack>
            
               
        
        </View> 
        <View style={styles.buttonCon}>
        <Button
            style={styles.buttonCon}
            title="Αποθηκευση Πιστοποιητικου"
            color="#003476"/>
        </View>
       
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container:{   
        flex:1,
        
        justifyContent:'center',
        },
    name:{
        fontSize:25,
        color: '#003476',
        
    },
    nameDesc:{
        fontSize:18,
    },
    buttonCon:{
    
        
        
        marginBottom:30,
        
    }
    
})
export default VerifyScan;