import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';
import Result from "./Result"
// import Display from "./Display"

export default function App() {
  const [moviesInDisplay, setMoviesInDisplay] = useState([]) /* this will be used to set state for the movie when we filter through the API */
  const [movieInResult, setMovieInResult] = useState([]) /* this saves movies from Result */
  const [errorFetchingMovie, setErrorFetchingMovie] = useState("")
  const movieLink = 'http://www.omdbapi.com/?apikey=29144b52&t='
  // const [resultLink, setResultLink] = useState("")

  /* function takes the title data, and checks to see if the data needs to be altered depending on presence of whitespace */
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
    /* To do: how to handle edge cases? i.e. typos? */
  const fetchMovie = (link) => {
    fetch(`${link}`)
      .then(response => response.json())
      .then(data => setMovieInResult(data)) /* after fetching the movie we searched, this will be passed as props to Result.jsx */
      // .catch(errors => setErrorFetchingMovie("We could not locate the movie you've searched. Please try again"))
  }

  /* the movie in Result should be set to state through moviesInDisplay, which will be assigned as props to Display.jsx */
  const addMovieToDisplay = (movieInfo) => {
    setMoviesInDisplay([...movieInfo])
  }

  return (
    <View style={styles.container}>
      <SearchBar editMovieTitle={editMovieTitle} />
      {movieInResult.hasOwnProperty("Title") ? 
        <Result movieInResult={movieInResult} addMovieToDisplay={addMovieToDisplay} /> 
        : 
        null}
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
