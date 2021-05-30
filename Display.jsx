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
    },
    boxOfficeMeanText:{
        fontSize: 14,
    },
    boxOfficeSDMText: {
        fontSize: 14,
    },
    medianRTScore: {
        fontSize: 14,
    }
})

const Display = (props) => {
    /* should display Box Office Mean, Box Office Standard Deviation, and Median Rotten Tomatoes Score */

    const boxOfficeMean

    const boxOfficeStandardDeviation 

    /* iterate through the object at the Ratings Key, then at Value key. If the score is a fraction, multiply by 10; otherwise, get the number before the % */
    const medianRTScore = movie["Ratings"].forEach((rating) => {
        let sum = 0
        if (rating["Value"].includes("/")){
            let newRating = parseInt(rating["Value"] * 10)
            sum += newRating
        } else if (rating["Value"].includes("%"))
    })

    return(
        <>
            <Image>{props.movieInDisplay.poster}</Image>
            <Text style={styles.titleText}>{/* movie title goes here? */}</Text>
            <View>{/* Box Office Mean */}</View>
        </>
    )
}

export default Display