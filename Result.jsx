/*
Result should render after user searches to confirm if this is the movie they want to find
    There should be a Button to add this movie to state.
*/

import React, {useState} from 'react'
import {StyleSheet, View, Button, Text, Image, TextInput} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    movieImage: {
        marginTop: "7%",
        marginBottom: "5%",
        width: 250,
        height: 380
    },
    movieTitleText: {
        fontSize: 28,
        fontWeight: "bold",
        paddingBottom: "2%"
    },
    yearText: {
        fontSize: 23,
        paddingBottom: "5%"
    }
})

export default function Result(props){

    const [added, setAdded] = useState(false)

    const resultPressHandler = () => {
        props.addMovieToDisplay(props.movieInResult)
        setAdded(!added)
    }

    /* Confirmation alert for UX: user is aware they've saved this movie to their search list */
    const confirmationAlert = () => {        
        return Alert.alert(
            "Success!",
            "You have saved this movie",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: true }
    )}

    return(
        <View style={styles.container} >
            <Image style={styles.movieImage} source={{uri: `${props.movieInResult["Poster"]}`}} />
            <Text style={styles.movieTitleText}>{props.movieInResult["Title"]}</Text>
            <Text style={styles.yearText}>Released: {props.movieInResult["Year"]}</Text>
            <Button onPress={resultPressHandler} title="Add to Search List" />
            {added ? confirmationAlert() : null}
        </View>
    )
}
