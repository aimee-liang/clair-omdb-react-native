import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native'
import Home from "./Home"
import Display from "./Display"

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 0.9, /* this should be flex: 1, */
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav: {
      marginTop: "4%",
      flexDirection: "row",
    },
    navItem: {
      alignItems: "center",
      padding: 40
    },
    navText :{
      fontSize: 26,
    }
  })

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
            <Text style={styles.navText}>Home</Text>
          </Link>
          <Link to="/display" style={styles.navItem}>
            <Text style={styles.navText}>Display</Text>
          </Link>
          </View>
        <Route exact path ="/display" render={()=> <Display moviesInDisplay={moviesInDisplay} />} />
        <Route exact path ="/" render={() => <Home addMovieToDisplayComponent={addMovieToDisplayComponent} />} />
      </View>
    </NativeRouter>
  );
}
