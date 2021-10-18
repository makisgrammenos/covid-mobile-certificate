import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { CommonActions } from '@react-navigation/native';

import PostQR from '../modules/PostQR';
import { flexGrow } from 'styled-system';

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
    setData(info);
   
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
      {/* <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill]}
       
      /> */}
      <BarCodeScanner
         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>

      {scanned && <Button title={'Close Scanned'} onPress={() => setDone(false)} />}
    </View>
  );
}
const opacity = 'rgba(0, 0, 0, .6)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
    
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row',
    flexGrow:3
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 10
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
})
  export default ScanScreen;



