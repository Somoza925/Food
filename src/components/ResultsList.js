import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';


const ResultsList = ({title, results}) => {
    return (
    <View>
        <Text style = {styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal = {true}
            data = {results}
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(result) => result.id} // important for performance   
            renderItem = {({item}) => {
                return <Text>{item.name} - {item.phone}|| </Text>;
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold"
    }
});


export default ResultsList; 