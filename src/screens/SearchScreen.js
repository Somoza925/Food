import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar'; 
import useResults from '../hooks/useResults'; // CUSTOM HOOK that provides searchApi, results which is the array of businesses, and an error message
import ResultsList from '../components/ResultsList';


const SearchScreen = () => { 
    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === $ || $$ || $$$
        return results.filter(results => {
            return results.price === price;
        })
    };
    console.log(results);


    return <View>
        <SearchBar 
        term = {term} 
        onTermChange = {setTerm} // SAME AS (newTerm) => setTerm(newTerm) 
        onTermSubmit = { () => searchApi(term)}  
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultsList results = {filterResultsByPrice('$')} title = "Cost Effective"/>
        <ResultsList results = {filterResultsByPrice('$$')} title = "Bit Pricier"/>
        <ResultsList results = {filterResultsByPrice('$$$')} title = "Big Money Baller"/>
    </View>
}

const styles = StyleSheet.create({

});

export default SearchScreen;