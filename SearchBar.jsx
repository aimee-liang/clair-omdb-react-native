/*
SearchBar should be a form input field, with a placeholder text

This component will need useState hook: initial value of movie title as an empty string
    Once user begins typing, the value will change
        On tap/click/enter of keyboard event, the value will return to an empty string

The data entered into SearchBar will be passed up to the parent component
*/

import React, {useState} from 'react';
import {Button, Keyboard, StyleSheet, View, TextInput} from 'react-native'

const styles = StyleSheet.create({
    searchText: {
        fontSize: 20
    }
})

export default function SearchBar(props){

    const [searchTerm, setSearchTerm] = useState("")

    const searchBarPressHandler = () => {
        props.editMovieTitle(searchTerm)
        setSearchTerm("")
        Keyboard.dismiss()
    }

    return (
        <View> 
            {/* need to correct so screen is not pushed up when keyboard is active */}
            <TextInput style={styles.searchText} placeholder="Search movies..." onBlur={Keyboard.dismiss} onChangeText={setSearchTerm} value={searchTerm} />
            <Button onPress={searchBarPressHandler} title="🔎" />
        </View>
    )
}
