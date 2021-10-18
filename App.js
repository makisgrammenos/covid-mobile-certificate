import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScanScreen  from './screens/Scan';
import VerifyScan from './screens/VerifyScan';
import Certificate from './screens/Certificate';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import { CommonActions } from '@react-navigation/native';
import { Platform} from 'react-native';
import CertHeader from './modules/headers/cert_header';
import CheckRoute from './screens/check';
function Header(props){
  return(
    <View style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0   }}>
      <Text>Ελληνική Δημοκρατία</Text>
      <Text>Πιστοποιτικό Eμβολιασμού COVID-19</Text>
    </View>
  )
}
function App({navigation}) {
  const Stack  = createStackNavigator();
  const [check,setCheck] = useState(false);
  const [certExists,setCertExists] = useState(false);
  var cert = null;
  
  console.log(navigation)
  // useEffect(()=>{
  //   try{
  //    SecureStore.getItemAsync('certificate').then(value=>{
  //      if (value!=null){
  //        cert = JSON.parse(value);
  //         navigation.dispatch(CommonActions.reset({index:0, routes:[{name:'Certifi cate',params:cert}] }));
        
        
  //      }
  //    });
      
  //   }
  //   catch(e){
  //     alert(e)
  //   }
  //   if(cert!=null){
  //     setCertExists(true);
  //   }
  //   setCheck(true);
  //   console.log(check)
  //   console.log(certExists)
  //   console.log(cert)
  // },[check])
 
    return (
    
        
      <>
      
        <NavigationContainer >
          
          <Stack.Navigator initialRouteName={'Check'}>
            
            <Stack.Screen name="QRSCAN" component={ScanScreen} options={{headerTitle:"Εισαγωγη Πιστοποιητικού",headerStyle:{
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
            <Stack.Screen name="Certificate" options={{headerTitle:"Βεβαίωση Εμβολιασμού COVID-19",headerStyle:{
              backgroundColor:"#003476"    },
              headerTintColor: 'white',
              headerStatusBarHeight:30,
              headerTitleStyle:'bold',
              headerTitleAlign:'center',
              animationTypeForReplace:"push"}}>
                {props => <Certificate {...props}/>}
              </Stack.Screen>
              <Stack.Screen name ="Check" component={CheckRoute} options={{headerTitle:"Έλεγχος στοιχείων",headerStyle:{
              backgroundColor:"#003476"    },
              headerTintColor: 'white',
              headerTitleStyle:'bold',
              headerTitleAlign:'center',
             
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
    
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App;