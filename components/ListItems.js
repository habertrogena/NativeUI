import React from "react";
import { StyleSheet, Text, View ,Image ,TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const ListItems = ({item}) => {
  return(
    <TouchableOpacity style ={styles.listItem} >
      
      <View style= {styles.listItemView} >
       <Text style= {styles.ItemText} >{item.text} </Text>
        <FontAwesome  name="remove" size={20} color= 'red' />
      {/** * <Icon name="remove" size={20} color={red} /> */}
      </View>
       
    </TouchableOpacity>
  )
};



const styles = StyleSheet.create({
  listItem :{
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor:"eee"
  },

  listItemView:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center"
  },

  ItemText:{
    fontSize:18
  }
  
});


export default ListItems;
