import React from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style = {styles.backgroundStyle}>
            <Feather name = "search" style = {styles.iconStyle}/>
            <TextInput
                style = {styles.inputStyle}
                placeholder = "Search"
                value = {term}
                onChangeText = {onTermChange} // SAME AS onChangeText = {(newTerm) => onTermChange(newTerm)}
                onEndEditing = {onTermSubmit} // SAME AS onEndEditing = {() => onTermSubmit()}
            />
        </View>);
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 13
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }, 
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;