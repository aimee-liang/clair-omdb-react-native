import React, {useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
// import Display from "./Display"

export default function App() {
  const [movieInDisplay, setMovieInDisplay] = useState([]) /* this will be used to set state for the movie when we filter through the API */
  const [moviesInState, setMoviesInState] = useState([]) /* this saves our fetched API in state to later filter from */
  let movieLink = 'http://www.omdbapi.com/?t='

  // useEffect(() => {
  //   fetchMovies()
  // }, [])

  /* function takes the title data, and checks to see if the data needs to be altered depending on whitespace */
  const editMovieTitle = (movieTitle) => {
    if (movieTitle.includes(' ')){
      let newMovieTitle = movieTitle.split(' ').join('+')
      let updatedMovieLink = movieLink.concat(`${newMovieTitle}`)
      // console.log(updatedMovieLink)
    } else {
      let updatedMovieLink = movieLink.concat(`${movieTitle}`)
    }
    fetchMovie(updatedMovieLink)
  }

  /* filter through the movies we fetched, and return the one that matches the search term AKA data, set this in state */
  const fetchMovie = (link) => {
    fetch(``)
  }
  // fetch(updatedMovieLink)
  // fetch('http://www.omdbapi.com/?apikey=29144b52&')
    // .then(response => response.json())
    // .then(data => moviesInState(data))
    // .catch(errors => console.log(errors))

  return (
    <View style={styles.container}>
      <SearchBar editMovieTitle={editMovieTitle} />
      {/* <Display movieInDisplay={movieInDisplay} /> */}
    </View>
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
