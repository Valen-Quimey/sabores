import { useState } from 'react';
import { StyleSheet, Text, TextInput, Pressable, View } from 'react-native';
import   {AntDesign } from '@expo/vector-icons';
import  {colors} from '../global/colors';


const Search = ({keyword, onSearch}) => {
    

  return (
    <View style= {styles.container}>
        <View style= {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput onChangeText= {onSearch} value= {keyword} style={ styles.input} placeholder='Buscar producto...' />
            <Pressable>
                <AntDesign name="search1" size= {25} color="black"/>
            </Pressable>
        </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingTop: 10,
    },
    input: {
        color: 'white',
        backgroundColor: colors.green,
        borderColor: colors.orange,
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
        marginTop: 40,
    },
});