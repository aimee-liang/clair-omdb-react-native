/*
Result should render after user searches to confirm if this is the movie they want to find
    There should be a Button to add this movie to state.
    Perhaps onPress or some event listener, the app will display Display.jsx, which returns the deliverables
*/

import React from 'react'
import {StyleSheet, View, Button, Text, Image, TextInput} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: "auto"
    },
    movieImage: {
        width: 20,
        height: 30
    },
    movieTitleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: "center"
    },
    yearText: {
        fontSize: 16,
        textAlignVertical: "center"
    },
    buttonColor:{
        backgroundColor: "yellow"
    }
})

export default function Result(props){

    // const [movieInResult, setMovieInResult] = useState([])
    const [added, setAdded] = useState(false)

    // const fetchMovie = (link) => {
    //     fetch(`${link}`)
    //         .then(response => response.json())
    //         .then(data => setMovieInResult(data)) /* after fetching the movie we searched, this will be passed as props to Result.jsx */
          // .catch(errors => setErrorFetchingMovie("We could not locate the movie you've searched. Please try again"))
    // }

    const resultPressHandler = () => {
        props.addMovieToDisplay(props.movieInResult)
        setAdded(true)
    }

    /* Confirmation alert for UX: user is aware they've saved this movie to their search list */
    const confirmationAlert = () => {        
        return "You've added this to your list!"
    }



    return(
        <>
        {/* {console.log(props)} */}
        <View /* style={styles.container}*/ >
            {/* <Image style={styles.movieImage} source={{uri: `${props.movieInResult["Poster"]}`}} />
            <Text style={styles.movieTitleText}>{props.movieInResult["Title"]}</Text>
            <Text style={styles.yearText}>{props.movieInResult["Year"]}</Text>
            <Button onPress={resultPressHandler} title="Add to Search List" /> */}
            {/* {added ? 
                <Button confirmationAlert() /> 
                : 
                null} */}
        </View>
        </>
    )
}
