import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.Text}> {title} </Text>
      <StatusBar style="auto" />
     
    </View>
  );
}

Header.defaultProps={
  title:'To Do List'
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
