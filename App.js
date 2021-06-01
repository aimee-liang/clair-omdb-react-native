import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native'
import Home from "./Home"
import Display from "./Display"


export default function App() {
  const [moviesInDisplay, setMoviesInDisplay] = useState([]) /* this will be used to set state for the movies we're saving from Result to Display */

  /* the movie in Result should be set to state through moviesInDisplay, which will be assigned as props to Display.jsx */
  const addMovieToDisplayComponent = (movieInfo) => {
    setMoviesInDisplay([...moviesInDisplay, movieInfo])
  }

  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/display" style={styles.navItem}>
            <Text>Display</Text>
          </Link>
          </View>
        <Route path="/display" render={()=> <Display moviesInDisplay={moviesInDisplay} />} />
        <Route exact path ="/" render={() => <Home addMovieToDisplayComponent={addMovieToDisplayComponent} />} />
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
  nav: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: "center",
    padding: 10
  },
});
