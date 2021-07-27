import React,{useEffect,useState}  from 'react'
import {View,Text} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

function CheckRoute({navigation}){
        
    const  [loading,setLoading] = useState(true);
    useEffect(()=>{
        SecureStore.getItemAsync('certificate').then(value=>{
            if (value!=null){
                navigation.dispatch(CommonActions.reset({index:0, routes:[{name:'Certificate'}]}));
            }
            else{
                navigation.dispatch(CommonActions.reset({index:0,routes:[{name:'QRSCAN'}]}))
            }
            
        })
    })
    return(<View>
            
    </View>)


}
export default CheckRoute;