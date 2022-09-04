import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ToDoItem({item, removeItem}) {
    return (
        <TouchableOpacity onPress={()=>removeItem(item.key)}>
            <View>
                <Text style={styles.container}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8b595',
        borderRadius:5,
        borderWidth:2,
        borderColor:"#f8b595",
        width:250,
        marginHorizontal:25,
        marginVertical:5,
        color:"#2c5d63",
        padding:10,
        textAlign:"center"
    }
})