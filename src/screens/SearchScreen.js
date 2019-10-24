import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {

    const[term, setTerm] = useState('');
    const[results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hi there');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'miami'
                }
            });
            setResults(response.data.businesses);
        } catch (err){
            setErrorMessage('Something went wrong! :(');
        }
    };

    // Call search api when component is first rendered
    // BAD CODE!! 
    // searchApi('pasta');

    return <View>
        <SearchBar 
        term = {term} 
        onTermChange = {setTerm} // SAME AS (newTerm) => setTerm(newTerm) 
        onTermSubmit = { () => searchApi(term)}  
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create({

});

export default SearchScreen;