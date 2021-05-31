import React, {useState} from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native'
// import SearchBar from './SearchBar';
// import Result from "./Result"
import Home from "./Home"
// import Display from "./Display"


export default function App() {
  const [moviesInDisplay, setMoviesInDisplay] = useState([]) /* this will be used to set state for the movies we're saving from Result to Display */

  /* function takes the title data, and checks to see if the data needs to be altered depending on presence of whitespace, : */
  // const editMovieTitle = (movieTitle) => {
  //   // if (movieTitle.includes(' ')){
  //     // let newMovieTitle = movieTitle.split(' ').join('+')
  //     // let updatedMovieLink = movieLink.concat(`${newMovieTitle}`)
  //     // fetchMovie(updatedMovieLink)
  //   // } else {
  //     let updatedMovieLink = movieLink + movieTitle
  //     // let updatedMovieLink = movieLink.concat(`${movieTitle}`)
  //     fetchMovie(updatedMovieLink)
  //   // }
  // }

  /* the movie in Result should be set to state through moviesInDisplay, which will be assigned as props to Display.jsx */
  const addMovieToDisplay = (movieInfo) => {
    setMoviesInDisplay([...movieInfo])
  }

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Home addMovieToDisplay={addMovieToDisplay} />
        {/* <SearchBar editMovieTitle={editMovieTitle} /> */}
        <Route path="/Display" render={()=> <Display movieInDisplay={moviesInDisplay} />} />
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
