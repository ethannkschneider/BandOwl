import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { bold } from 'ansi-colors';

import Button from './src/Components/Button';
import NightSky from './assets/night-sky.jpg';

import GetStarted from './src/Components/GetStarted';
import SearchNames from './src/Components/SearchNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#9A48D0',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={NightSky}>
          <Text style={styles.headerText}>Welcome to BandOwl!</Text>
          <Button
            buttonText="Get Started"
            onPress={() => this.props.navigation.navigate('GetStarted')}
            backgroundColor="#63458A"
          >
            <Text>Get Started</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  GetStarted: GetStarted,
  SearchNames: SearchNames
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
