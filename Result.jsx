/*
Result should render after user searches to confirm if this is the movie they want to find
    There should be a Button to add this movie to state.
    Perhaps onPress or some event listener, the app will display Display.jsx, which returns the deliverables
*/

import React from 'react'
import {StyleSheet, View, Button, Text, Image} from 'react-native'

const styles = StyleSheet.create({
    container: {
        margin: auto
    },
    movieImage: {
        width: 20,
        height: 30
    },
    movieTitleText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    yearText: {
        fontSize: 16,
        textAlign: center
    }
})

export default function Result(props){

    const resultPressHandler = () => {
        props.addMovieToDisplay(props.movieInResult)
    }

    return(
        <View style={styles.container}>
            <Image source={{uri: `${props.movieInResult["Poster"]}`}} />
            <Text style={styles.movieTitleText}>{props.movieInResult["Title"]}</Text>
            <Text style={styles.yearText}>{props.movieInResult["Year"]}</Text>
            <Button onPress={resultPressHandler} title="+" />
        </View>
    )
}
