/*

Display should be displayed underneath SearchBar. 
    It will need three variables to calculate for Mean, Standard Deviation, and Rotten Tomatoes score

*/

import React, {useState} from 'react'
import {StyleSheet, View, Image} from 'react-native'

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

const Display = (props) => {
    /* should display Box Office Mean, Box Office Standard Deviation, and Median Rotten Tomatoes Score */

    const boxOfficeMean

    const boxOfficeStandardDeviation 

    /* iterate through the object at the Ratings Key. If the score is between 0 - 10, multiply by 10. Otherwise, if  */
    const medianRTScore

    return(
        <>
            <Image>{props.movieInDisplay.poster}</Image>
            <Text style={titleText}>{/* movie title goes here? */}</Text>
            <View></View>
        </>
    )
}

export default Display