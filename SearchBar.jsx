/*
SearchBar should be a form input field, with a placeholder text

This component will need useState hook: initial value of movie title as an empty string
    Once user begins typing, the value will change to the e.target.value
        On tap/click/enter of keyboard event, the value will return to an empty string

The data entered into SearchBar will be passed up to the parent component
*/

import React, {useState} from 'react';
import {Button, Keyboard, StyleSheet, View, TextInput} from 'react-native'
import Result from './Result'

const styles = StyleSheet.create({
    searchText: {
        fontSize: 18
    },
    buttonStyle: {
        marginTop: "10%"
    }
})

export default function SearchBar(props){

    const [searchTerm, setSearchTerm] = useState("")

    const localChangeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const searchBarPressHandler = () => {
        props.editMovieTitle(searchTerm)
    }

    return (
        <>
            {props.movieInResult ? 

                <Result movieInResult={props.movieInResult} addMovieToDisplay={props.addMovieToDisplay} />

                : 

                <View>
                    <TextInput style={styles.searchText} placeholder="Search movies..." onBlur={Keyboard.dismiss} onChange={localChangeHandler} value={searchTerm} />
                    <Button onPress={searchBarPressHandler} title="🔎" />
                </View>
            }
        </>
    )
}
