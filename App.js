import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,FlatList} from 'react-native';
import Header from './components/Header';
import { GenerateUUID } from 'react-native-uuid';
import ListItems from './components/ListItems'

export default function App() {
  const [items,setItems] = useState([
    {id:1234,Text:'milk'},
    {id:1234,Text:'Bread'},
    {id:1234,Text:'Sugar'},
    {id:1234,Text:'Coffee'},
    {id:1234,Text:'jam'}

    
  ])
  return (
    <View style={styles.container}>
      <Header/>
      <FlatList data={items} renderItem = {({item})=> <ListItems item={item} />}/>
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60

  },

  Text:{
    color:'red',
    fontSize:20,
  },
  
});
