import React, {useState} from "react"
import { Alert, StyleSheet, View } from 'react-native';
import SearchBar from "./SearchBar"
import Result from "./Result"

export default function Home(props){

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    const [movieInResult, setMovieInResult] = useState([]) /* this saves the movie in Result after fetching */
    const [doneFetching, setDoneFetching] = useState(false) /* flag variable - if done fetching, 
    const movieLink = 'http://www.omdbapi.com/?apikey=29144b52&t=' /* link to API with key to later concat */

    const editMovieTitle = (movieTitle) => {
        let updatedMovieLink = movieLink + movieTitle
        fetchMovie(updatedMovieLink)
    }

    /* fetch movie and return the one that matches the search term, set this in state */
    const fetchMovie = (link) => {
        fetch(`${link}`)
        .then(response => response.json())
        .then(data => setMovieInResult(data)) /* after fetching the movie we searched, this will be passed as props to Result.jsx */
        fetched()
    }

    const fetched = () => {
        setDoneFetching(!doneFetching)
    }

    /* error message in event of user error */
    const alertMessage = () => {
        return Alert.alert(
            "Error",
            `${movieInResult["Error"]} Please try again.`,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: true }
        )
    }

    return (
        <View style={styles.container}>
            <SearchBar editMovieTitle={editMovieTitle}/>
            {movieInResult.hasOwnProperty("Error") ? alertMessage() : null}
            {movieInResult.hasOwnProperty("Title") ? <Result movieInResult={movieInResult} addMovieToDisplayComponent={props.addMovieToDisplayComponent} doneFetching={doneFetching} /> 
            : 
            null}
        </View>
    )
}