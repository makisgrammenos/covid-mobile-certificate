import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import PostQR from '../modules/PostQR';

function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [done,setDone] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    PostQR(data)
    setDone(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  	return (done) ? (<View ><Text>Ok scanned</Text>
        <Button title={"Scan Again"} onPress={()=>{setDone(false)}}/>
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



