import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';

export default function App() {
  const [movieInDisplay, setMovieInDisplay] = useState([]) /* this will be used to set state for the movie when we filter through the API */

  /* fetch movies */


  const searchMovies = (data) => {
    let movieResult =  
  }

  return (
    <View style={styles.container}>
      <SearchBar />
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
