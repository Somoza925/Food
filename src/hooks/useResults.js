import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
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
    useEffect(() => { // use this function one time when the component runs
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage]; // returning the things we need 
};