import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.Text}> hello habert</Text>
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding:15,
    backgroundColor: 'green',
    
  },

  Text:{
    color: 'white',
    fontSize:20,
    textAlign:'center'
  },
  
});
