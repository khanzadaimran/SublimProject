// import { View, Text,Button } from 'react-native'
// import React from 'react'

// const Homescreen = ( ) => {
//   return (
//     <View>
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button
//     title="Press me"
    
//   />
//   </View>
  
//     </View>
//   )
// }
// export default Homescreen
import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Homescreen = ({navigation}) => {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'   }}>
      <Text style={styles.bigBlue}>WELCOME</Text>
      <Button
      title="LETS START"
      onPress={() => navigation.navigate('second')}
    />
      
    </View>
  )
}

const styles = StyleSheet.create({
 
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
    
});

export default Homescreen