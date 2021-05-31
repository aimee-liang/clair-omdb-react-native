import React, {useState} from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native'
import SearchBar from './SearchBar';
import Result from "./Result"
// import Display from "./Display"


export default function App() {
  const [moviesInDisplay, setMoviesInDisplay] = useState([]) /* this will be used to set state for the movies we're saving from Result to Display */
  const [movieInResult, setMovieInResult] = useState([]) /* this saves movie in Result after fetching */
  const movieLink = 'http://www.omdbapi.com/?apikey=29144b52&t='

  /* function takes the title data, and checks to see if the data needs to be altered depending on presence of whitespace, : */
  const editMovieTitle = (movieTitle) => {
    // if (movieTitle.includes(' ')){
      // let newMovieTitle = movieTitle.split(' ').join('+')
      // let updatedMovieLink = movieLink.concat(`${newMovieTitle}`)
      // fetchMovie(updatedMovieLink)
    // } else {
      let updatedMovieLink = movieLink + movieTitle
      // let updatedMovieLink = movieLink.concat(`${movieTitle}`)
      fetchMovie(updatedMovieLink)
    // }
  }
  
  /* fetch movie and return the one that matches the search term, set this in state */
  const fetchMovie = (link) => {
    fetch(`${link}`)
      .then(response => response.json())
      .then(data => setMovieInResult(data)) /* after fetching the movie we searched, this will be passed as props to Result.jsx */
  }

  /* the movie in Result should be set to state through moviesInDisplay, which will be assigned as props to Display.jsx */
  const addMovieToDisplay = (movieInfo) => {
    setMoviesInDisplay([...movieInfo])
  }

  const alertMessage = () => {
    return Alert.alert(
      "Error",
      `${movieInResult["Error"]}`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true }
    )
  }

  return (
    <NativeRouter>
      <View style={styles.container}>
        {/* <Route path="/Search" render={()=> <SearchBar editMovieTitle={editMovieTitle} />} /> */}
      <SearchBar editMovieTitle={editMovieTitle} />
        <Route path="/Display" render={()=> <Display movieInDisplay={moviesInDisplay} />} />
        {movieInResult.hasOwnProperty("Error") ? alertMessage() : null }
        {movieInResult.hasOwnProperty("Title") ? 
          <Result movieInResult={movieInResult} addMovieToDisplay={addMovieToDisplay} /> : null
        }
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
