import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
// import Display from "./Display"

export default function App() {
  const [moviesInDisplay, setMoviesInDisplay] = useState([]) /* this will be used to set state for the movie when we filter through the API */
  const [movieInResult, setMovieInResult] = useState([]) /* this saves movies from Result */
  const movieLink = 'http://www.omdbapi.com/?apikey=29144b52&t='

  /* function takes the title data, and checks to see if the data needs to be altered depending on whitespace */
  const editMovieTitle = (movieTitle) => {
    if (movieTitle.includes(' ')){
      let newMovieTitle = movieTitle.split(' ').join('+')
      let updatedMovieLink = movieLink.concat(`${newMovieTitle}`)
      fetchMovie(updatedMovieLink)
    } else {
      let updatedMovieLink = movieLink.concat(`${movieTitle}`)
      fetchMovie(updatedMovieLink)
    }
  }

  /* fetch movie and return the one that matches the search term, set this in state */
  const fetchMovie = (link) => {
    fetch(`${link}`)
      .then(response => response.json())
      .then(data => movieInResult(data)) /* after fetching the movie we searched, this will be passed down in props to Result.jsx */
  }

  /* movie in Result should be set to state through moviesInDisplay, which will be assigned as props to Display.jsx */
  const addMovieToDisplay = (data) => {
    setMoviesInDisplay([...data])
  }

  return (
    <View style={styles.container}>
      <SearchBar editMovieTitle={editMovieTitle} movieInResult={movieInResult} addMovieToDisplay={addMovieToDisplay} />
      {/* <Display movieInDisplay={moviesInDisplay} /> */}
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
