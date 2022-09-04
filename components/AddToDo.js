import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddToDo({AddItem}) {
    const [newtoDo, setNewToDo] = useState("")
    const getNewToDo = (val => setNewToDo(val) )
    return (
        <View>
            <TextInput
                style={styles.inputs}
                placeholder="Add new Todo"
                value={newtoDo}
                onChangeText={(val)=>{
                    getNewToDo(val);
                }}
            ></TextInput>
            <Button 
                style={styles.btn}
                title='Add'
                onPress={()=>{
                    if(newtoDo !== ""){
                        AddItem(newtoDo)
                    }
                    
                    setNewToDo("")
                }}
            ></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#fff',
        color:"#79c2d0",
        borderRadius:5
    },
    inputs:{
        borderColor:"#f8b595",
        borderWidth:2,
        borderRadius:5,
        width:200,
        height:40,
        backgroundColor:"#e7eaf6",
        marginHorizontal:50,
        marginVertical:20,
        color:"#2c5d63",
        padding:5,
    },
    btn:{
        borderRadius:20,
        margin:5
    }
})