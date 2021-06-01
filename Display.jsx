/*
Display will need to calculate for Mean, Standard Deviation, and Rotten Tomatoes score
*/

import React, {useState} from 'react'
import {StyleSheet, View, Text, Alert, Image} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    dataText: {
        fontSize: 22
    },
    titleText: {
        fontSize: 28
    }, 
    movieImage: {
        marginTop: "7%",
        marginBottom: "7%",
        width: 250,
        height: 380
    }
})

export default function Display(props){
    const length = props.moviesInDisplay.length /* global variable since we are using this for all three calculations */
    const [totalMean, setTotalMean] = useState(0) /* save totalMean since two functions are using this for formulas? */

    /*  Iterate through the array and access the "Box Office" key. Make this a number and remove any non-numeric characters
        Using reduce, find the sum of all movies user has saved 
        Divide by length
    */
    const boxOfficeMean = () => {
        let boxOfficeValues = props.moviesInDisplay.filter((movie) => {
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

    /* 

    1. Work out the Mean (the simple average of the numbers)
    2. Then for each number: subtract the Mean and square the result
    3. Then work out the mean of those squared differences.
    4. Take the square root of that and we are done!

    */
    const boxOfficeStandardDeviation = () => {
        // iterate through array of data, and find the total
        // divide this by length, and assign result to average variable
        // let average = boxOfficeMean(props.moviesInDisplay)
        let result = 0
        let final
        
        props.moviesInDisplay.forEach((movie) => {
            let stringToNum = parseInt(movie["BoxOffice"].slice(1).replace(/,/g, ''))
            result += Math.pow((stringToNum - totalMean), 2)
            final = Math.sqrt(result / length )
        })
        // iterate again through the data, and forEach, subtract the average (saved as a variable) from the number, and square this
        // sum the above, and divide again by length
        // use Math.sqrt() on the mean, and return result
        return result.toLocaleString(('en-US', {
            style: 'currency',
            currency: 'USD'
        }))
    }

    /* 
    Access the Ratings Key, then at Value key forEach object in array. Get the number, slice before %, convert to num from string, and store in array?
        Sort through the scores
        const length = length of array of movies
            median = Array[(length + 1) / length] (if odd)
            if even, Math.floor and Math.ceil the median, find the values at that index in the array, then sum it up and divide by length
    */
    const medianRTScore = () => {
        let rangeOfTomatoes = []

    }

    const errorAlert = () => {        
        return Alert.alert(
            "Error!",
            "You have not saved any movies for our app to render data",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ],
            { cancelable: true }
    )}

    return(
        <View>
        {console.log(props.moviesInDisplay)}
            {props.moviesInDisplay.length > 1 ? /* has the user saved multiple movies? */
                <View>
                    <Text style={styles.dataText}>Box Office Mean: {boxOfficeMean(props.moviesInDisplay)}</Text>
                    <Text style={styles.dataText}>Box Office Standard Deviation: ${boxOfficeStandardDeviation(props.moviesInDisplay)}</Text>
                    <Text style={styles.dataText}>Median Rotten Tomatoes Score: {}%</Text>
                </View>
            :
            props.moviesInDisplay.length === 1 ? /* if not, display just the one movie they've saved */
                <View>
                    <Image style={styles.movieImage} source={{uri: `${props.moviesInDisplay[0]["Poster"]}`}} />
                    <Text style={styles.titleText}>{props.moviesInDisplay[0]["Title"]}</Text>
                    <Text style={styles.dataText}>Box Office Total: {props.moviesInDisplay[0]["BoxOffice"]}</Text>
                </View>
            :
            errorAlert() /* and if the user navigates here without any saved movies, receives error message */
            }
        </View>
    )
}
