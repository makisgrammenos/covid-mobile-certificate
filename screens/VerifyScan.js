import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function VerifyScan({route,navigation}) {
    const {data} = route.params;
    
    return(
        <View>
            <Text>Verify Scan</Text>
        </View>
    )
}

export default VerifyScan;