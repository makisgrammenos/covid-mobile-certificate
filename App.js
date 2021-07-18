import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScanScreen  from './screens/Scan';
import VerifyScan from './screens/VerifyScan';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const Stack  = createStackNavigator();
  return (
   
      
     <>
     
      <NavigationContainer>
       
        <Stack.Navigator initialRouteName="QRSCAN">
          <Stack.Screen name="QRSCAN" component={ScanScreen} options={{headerTitle:"Εισαγωγη Πιστοποιτηκού",headerStyle:{
            backgroundColor:"#003476"    },
            headerTintColor: 'white',
            headerTitleStyle:'bold',
            headerTitleAlign:'center'
          }}/>
          <Stack.Screen name ="VerifyScan" component={VerifyScan}/>
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
