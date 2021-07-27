import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScanScreen  from './screens/Scan';
import VerifyScan from './screens/VerifyScan';
import Certificate from './screens/Certificate';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
export default function App({navigation}) {
  const Stack  = createStackNavigator();
  const [check,setCheck] = useState(false);
  const [certExists,setCertExists] = useState(false);
  var cert = null;
  useEffect(()=>{
    try{
     SecureStore.getItemAsync('certificate').then(value=>{
       if (value!=null){
         cert = JSON.parse(value);
        
       }
     });
      
    }
    catch(e){
      alert(e)
    }
    if(cert!=null){
      setCertExists(true);
    }
    setCheck(true);
    console.log(check)
    console.log(certExists)
    console.log(cert)
  },[check])
  if (!check){
    return(
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
  else{
    return (
    
        
      <>
      
        <NavigationContainer>
        
          <Stack.Navigator initialRouteName={certExists?"Certificate":'QRSCAN'}>
            <Stack.Screen name="QRSCAN" component={ScanScreen} options={{headerTitle:"Εισαγωγη Πιστοποιτηκού",headerStyle:{
              backgroundColor:"#003476"    },
              headerTintColor: 'white',
              headerTitleStyle:'bold',
              headerTitleAlign:'center'
            }}/>
            <Stack.Screen name ="VerifyScan" component={VerifyScan} options={{headerTitle:"Επιβεβαίωση στοιχείων",headerStyle:{
              backgroundColor:"#003476"    },
              headerTintColor: 'white',
              headerTitleStyle:'bold',
              headerTitleAlign:'center',
             
            }}/>
            <Stack.Screen name="Certificate" options={{headerTitle:"Πιστοποιτηκό εμβολιασμού COVID-19",headerStyle:{
              backgroundColor:"#003476"    },
              headerTintColor: 'white',
              headerTitleStyle:'bold',
              headerTitleAlign:'center',}}>
                {props => <Certificate {...props} cert={cert}/>}
              </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
