import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image ,FlatList} from 'react-native';
import Header from './components/Header';
import uuid from 'react-uuid';

import ListItems from './components/ListItems'


  const App = () =>{
    const [items,setItems] = useState([
      {id:uuid(), text:"milk"},
      {id:uuid(), text:"Bread"},
      {id:uuid(), text:"Sugar"},
      {id:uuid(), text:"Coffee"},
      {id:uuid(), text:"BlueBand"},
    ])


    return(
      <View style={styles.container} >
        <Header/>
        <FlatList data={items} renderItem={({item})=>(
          <ListItems item={item} />
        )} />
      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingTop: 60
    }
  })

export default App;