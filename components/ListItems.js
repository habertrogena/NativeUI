import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,TouchableOpacity} from 'react-native';

export default function ListItem({title}) {
  return (
    <View style={styles.ListItems}>
      <Text style={styles.Text}> {title} </Text>
      <StatusBar style="auto" />
     
    </View>
  );
}



const styles = StyleSheet.create({
  ListItems: {
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
