/*

Display should be displayed underneath SearchBar

*/

import React, {useState} from 'react'
import {StyleSheet, View, Image} from 'react-native'

const styles = StyleSheet.create({
    container: {
        
    }
})

const Display = (props) => {
    /* should display Box Office Mean, Box Office Standard Deviation, and Median Rotten Tomatoes Score */
    return(
        <>
            <Image>{props.movieInDisplay.poster}</Image>
            <View>
                
            </View>
        </>
    )
}

export default Display