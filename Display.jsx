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
    tableText: {
        fontSize: 14
    }
})

const Display = (props) => {
    /* should display Box Office Mean, Box Office Standard Deviation, and Median Rotten Tomatoes Score */

    const boxOfficeMean

    const boxOfficeStandardDeviation 

    /* access the Ratings Key, then at Value key. Get the number and slice before %. Convert to num from string */
    const medianRTScore = props.movieInDisplay["Ratings"].forEach((rating) => {
        let result = 0
        if (movie["Ratings"]["Source"] == "Rotten Tomatoes"){
            let ratingToNum = parseInt(movie["Ratings"]["Value"].slice("%"))
            result += ratingToNum
        } else {
            return "A Rotten Tomatoes rating for this movie was not found"
        }
        return result
    })

    return(
        <>
            <Image>{props.movieInDisplay.poster}</Image>
            <Text style={styles.titleText}>{/* movie title goes here? */}</Text>
            <View>{/* Box Office Mean */}</View>
            <View>
                <Text style={styles.tableText}>Median Rotten Tomatoes Score: {medianRTScore}</Text>
            </View>
        </>
    )
}

export default Display