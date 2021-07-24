import React,{useState,useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet,Button,Dimensions, DevSettings} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {NativeBaseProvider ,Center,VStack,Heading} from  'native-base';
import SaveCertificate from '../modules/SaveCertificate';

function VerifyScan({route,navigation}) {
    const {data} = route.params;
    const [certSaved,setCertSaved] = useState(false);
    useEffect(()=>{
        if(certSaved){
            DevSettings.reload()
        }
    },[certSaved])
    const handleSubmition = (data) => {
       if(SaveCertificate(data)){
           setCertSaved(true);
       }
       else {
           setCertSaved(false);

        }
}
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
            
            title="Αποθηκευση Πιστοποιητικου"
            color="#003476"
           
            onPress={()=>{handleSubmition(data)}}
            />
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
        marginRight:10,
        marginLeft:10,

      
      
        
    }
    
})
export default VerifyScan;