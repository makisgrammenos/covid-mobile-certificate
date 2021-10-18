import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { CommonActions } from '@react-navigation/native';

import PostQR from '../modules/PostQR';

function ScanScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [done,setDone] = useState(false);
  const [data,setData] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  useEffect(() => {
    if (done){
      
     navigation.navigate('VerifyScan',{data:data})
    }
  }, [done]); 
  const handleBarCodeScanned =  async ({ type, data }) => {
  
   
    var info =  await PostQR(data);
    await setData(info);
   
   await  setDone(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  	return (done) ? (<View ><Text>Ok scanned</Text>
        <Button title={"Scan Again"} onPress={()=>{setDone(false); setScanned(false)}}/>
      </View>) : 
 
    (<View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, { flex: 1 }]}
      />

      {scanned && <Button title={'Close Scanned'} onPress={() => setDone(false)} />}
    </View>
  );
}
export default ScanScreen;



