// import React from "react";
// import { StyleSheet, Text, View ,Image ,TouchableOpacity,TextInput} from 'react-native';
// import { useState } from 'react';



// const AddItem = ({title,AddItem}) => {

//     const [text,setText]=useState('');
//     const onchange = textvalue => setText(textvalue);
//   return(
//     <View>
//         <TextInput placeholder="Add Item..." style={styles.input}  onChangeText={onchange} />
//         <TouchableOpacity  style={styles.btn} onPress={()=>{
//             AddItem(text);
//         }} >
//             <Text style={styles.btnText} > Add Item</Text>

//         </TouchableOpacity>
//     </View>
//   )
// };



// const styles = StyleSheet.create({
//  input:{
//     height:60,
//     padding: 8,
//     fontSize: 16
//  },
//  btn:{
//     padding: 9,
//     margin:5,
//     backgroundColor:'#c2bad8'
//  },
//  btnText:{
//     color:'blue',
//     fontSize: 20,
//     textAlign:'center'
//  }
// });


// export default AddItem;