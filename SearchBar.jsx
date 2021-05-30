/*
SearchBar should be a form input field, with a placeholder text

This component will need useState hook: initial value of movie title as an empty string
    Once user begins typing, the value will change to the e.target.value
        On tap/click/enter of keyboard event, the value will return to an empty string

The data entered into SearchBar will be passed up to the parent component, which will handle this
*/

import React, {useState} from 'react';
import {Button, Keyboard, StyleSheet, View, TextInput} from 'react-native'

const styles = StyleSheet.create({
    searchText: {
        fontSize: 18
    }
})

export default function SearchBar (props){

    const [searchTerm, setSearchTerm] = useState("")

    const changeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const pressHandler = () => {
        props.searchMovies(searchTerm)
    }

    return (
        <View>
            <TextInput style={styles.searchText} placeholder="Search movies..." onBlur={Keyboard.dismiss} onChange={changeHandler} value={searchTerm} />
            <Button onPress={pressHandler} title="🔎"/>
        </View>
    )
}
