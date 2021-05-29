import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';

export default function App() {
  // const [movieTitle, setMovieTitle] = useState("")
  const [movieInDisplay, setMovieInDisplay] = useState([]) /* this will be used to set state for the movie when we filter through the API */
  const [moviesInState, setMoviesInState] = useState([])

  useEffect(() => {
    fetchMovies()
  }, [])

  /* fetch movies */
  const fetchMovies = () => {
    fetch(/* link here */)
      .then(response => response.json())
      .then(data => moviesInState(data))
      .catch(errors => console.log(errors))
  }

  /* filter through the movies we fetched, and return the one that matches the search term AKA data, set this in state */
  const searchMovies = (data) => {
    let movieResult =  moviesInState.filter((movie) => {
      return movie["Title"] == data
    })
    setMovieInDisplay(movieResult)
  }

  return (
    <View style={styles.container}>
      <SearchBar searchMovies={searchMovies}/>
      <Display />
    </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
