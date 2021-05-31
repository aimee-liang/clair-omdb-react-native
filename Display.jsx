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

export default function Display(props){
    const length = props.moviesInDisplay.length /* global variable since we are using this for all three calculations */


    /*  Iterate through the array and access the "Box Office" key
        Using reduce, find the sum of all movies user has saved 
        Divide by length of array
    */
    const boxOfficeMean = () => {
        // return props.moviesInDisplay["BoxOffice"].reduce((acc, curr) => {
        //     return acc + curr
        // }, 0)
    }

    /* 

    1. Work out the Mean (the simple average of the numbers)
    2. Then for each number: subtract the Mean and square the result
    3. Then work out the mean of those squared differences.
    4. Take the square root of that and we are done!

    */
    const boxOfficeStandardDeviation = () => {
        let average
        let result
        // iterate through array of data, and find the total
        // divide this by length, and assign result to average variable
        // iterate again through the data, and forEach, subtract the average (saved as a variable) from the number, and square this
        // sum the above, and divide again by length
        // use Math.sqrt() on the mean, and return result
    }

    /* 
    Access the Ratings Key, then at Value key forEach object in array. Get the number, slice before %, convert to num from string, and store in array?
        Sort through the scores
        const length = length of array of movies
            median = Array[(length + 1) / length] (if odd)
            if even, Math.floor and Math.ceil the median, find the values at that index in the array, then sum it up and divide by length
    */
    const medianRTScore = () => {
        
    }

    return(
        <>
            <View>
                <Text style={styles.tableText}>Box Office Mean: ${}</Text>
            </View>

            <View>
                <Text style={styles.tableText}>Box Office Standard Deviation: ${}</Text>
            </View>

            <View>
                <Text style={styles.tableText}>Median Rotten Tomatoes Score: {medianRTScore}%</Text>
            </View>
        </>
    )
}
