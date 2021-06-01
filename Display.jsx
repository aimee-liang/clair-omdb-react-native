/* Display will need to calculate for Mean, Standard Deviation, and Rotten Tomatoes score */

import React, {useState} from 'react'
import {StyleSheet, View, Text, Alert} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    dataText: {
        fontSize: 18
    },
    titleText: {
        fontSize: 28
    }
})

export default function Display(props){
    const [totalMean, setTotalMean] = useState(0) /* save totalMean since two functions are using this for formulas? */

    /*  Iterate through the array and access the "Box Office" key. Make this a number and remove any non-numeric characters
        Using reduce, find the sum of all movies user has saved 
        Divide by length
    */
    const boxOfficeMean = () => {
        const moviesFromProps = props.moviesInDisplay
        const length = moviesFromProps.length

        let boxOfficeValues = moviesFromProps.filter((movie) => {
            return parseInt(movie["BoxOffice"].slice(1).replace(/,/g, ''))
        })
        let mean = boxOfficeValues.reduce((acc, curr) => {
            return ((acc + curr) / length)
        })
        setTotalMean(mean.toFixed(2))
        return mean.toLocaleString(('en-US', {
            style: 'currency',
            currency: 'USD'
        }))
    }

    /* 1. Work out the Mean (the simple average of the numbers)
    2. Then for each number: subtract the Mean and square the result
    3. Then work out the mean of those squared differences.
    4. Take the square root of that and we are done! */
    const boxOfficeStandardDeviation = () => {
        let moviesFromProps = props.moviesInDisplay
        const length = moviesFromProps.length
        let result = 0
        let final

        moviesFromProps.forEach((movie) => {
            let stringToNum = parseInt(movie["BoxOffice"].slice(1).replace(/,/g, ''))
            result += Math.pow((stringToNum - totalMean), 2)
            final = Math.sqrt(result / length ).toFixed(2)
        })
        return final.toLocaleString(('en-US', {
            style: 'currency',
            currency: 'USD'
        }))
    }

    /* Access the Ratings Key, then at Value key forEach object in array. Get the number, slice before %, convert to num from string, and store in array */

    const medianRTScore = () => {
        let range = []
        const moviesFromProps = props.moviesInDisplay

        moviesFromProps.forEach((movie) => {
            movie["Ratings"].forEach((rating) => {
                if (rating["Value"].includes("%")){
                    let score = parseInt(rating["Value"].slice(0, rating["Value"].length -1))
                    range.push(score)
                }
            })
        })
        return sortForMedian(range)
    }

    /* helper function to sort for our median score
            median = Array[(length + 1) / length] (if odd)
            if even, Math.floor and Math.ceil the median, find the values at that index in the array, then sum it up and divide by length
    /* this sorting can be cleaned up for optimization - time constraints*/
    const sortForMedian = (array) => {
        const length = array.length
        let sortedScores = array.sort((a, b) => a - b)
        let index = ((length + 1) / 2)
        let sum

        if (length % 2 === 1){
            sum = sortedScores[index]
        } else if (length % 2 === 0){
            let firstIndex = Math.floor(index)
            let secondIndex = Math.ceil(index)
            sum = (((sortedScores[firstIndex]) + sortedScores[secondIndex]) / 2)
        }
        return sum
    }


    const errorAlert = () => {        
        return Alert.alert(
            "Error!",
            "You haven't saved enough movies to display data",
            [
                { text: "OK", onPress: () => console.log("OK Option Pressed") },
            ],
            { cancelable: true }
    )}

    return(
        <>
        <View>
            {props.moviesInDisplay? /* has the user saved multiple movies? */ 
                <View>
                    <Text style={styles.dataText}>Box Office Mean: {/* boxOfficeMean() */} </Text>
                    <Text style={styles.dataText}>Box Office Standard Deviation: ${/* boxOfficeStandardDeviation() */} </Text>
                    <Text style={styles.dataText}>Median Rotten Tomatoes Score: {medianRTScore()}% </Text>
                </View>
            :
            errorAlert() /* and if the user navigates here without one or more saved movies, receives error message */
            }
        </View>
        </>
    )
}
