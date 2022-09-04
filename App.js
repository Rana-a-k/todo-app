import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import  Header  from './components/Header';
import  AddToDo  from './components/AddToDo';
import ToDoItem from './components/ToDoItem'
import { useState } from 'react';

export default function App() {
  const [toDo, setToDo] = useState([
    {key:1, text: "wake up"}
  ])
  const AddItem = (text)=>{
    setToDo(prev=>{
      return [...prev,
        {key: Math.random().toString(), text:text}
      
      ]
    })
  }
  const removeItem = (id)=>{
    setToDo((prev)=>prev.filter(item =>item.key != id))

  }
  return (
    <View style={styles.container}>
      <View>
        <Header></Header>
        <AddToDo AddItem={AddItem}/>
        <FlatList
          data={toDo}
          renderItem={({item})=>{
            return(
              <ToDoItem removeItem={removeItem} item={item}/>
            )
          }}
          ></FlatList>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  }
});
