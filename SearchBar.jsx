/*

SearchBar should be a form input field, with a placeholder text

This component will need useState hook: initial value of movie title as an empty string
    Once user begins typing, the value will change to the e.target.value
        On tap/click/enter of keyboard event, the value will return to an empty string

The data entered into SearchBar will be passed up to the parent component, which will handle this

*/

import {useState} from 'react';
import {Button, Keyboard, StyleSheet, View} from 'react-native'

// const styles = StyleSheet.create({
//     container: {

//     }
// })

const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState("")

    const pressHandler = (e) => {
        setSearchTerm(e.target.value)
        props.searchMovies(searchTerm)
    }

    return (
        <View>
            <TextInput placeholder="Search movies..." onBlur={Keyboard.dismiss} />
            <Button onPress={pressHandler} title="🔎"/>
        </View>
    )
}

export default SearchBar