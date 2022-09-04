import { StyleSheet, Text, View } from 'react-native';
//import styles from './Header.styles';

export default function Header() {
    return (
        <View>
            <Text style={styles.containers}>My ToDo app list</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#e0e0e0',
        color:"#79c2d0",
        borderRadius:5,
        marginTop:10,
        fontSize:40
    }})