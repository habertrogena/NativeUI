import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import uuid from 'react-uuid';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems'


const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "milk" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Sugar" },
    { id: uuid(), text: "Coffee" },
    { id: uuid(), text: "BlueBand" },
    { id: uuid(), text: "eggs" }
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'please add an item', { text: 'ok' })
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      })
    }


  }



  return (
    <View style={styles.container} >
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItems item={item}
          deleteItem={deleteItem} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;