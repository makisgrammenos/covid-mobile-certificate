import React ,{useEffect}from 'react'
import * as SecureStore from 'expo-secure-store';
async function SaveCertificate(data) {
    
    
   
    try{
        await SecureStore.setItemAsync('certificate', JSON.stringify(data));
        
        return true;
    }catch(e){
       alert(e)
    }
   
    return false;
    
    
}

export default SaveCertificate;