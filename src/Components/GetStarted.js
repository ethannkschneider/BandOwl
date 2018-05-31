import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

export default class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.headerText}>What would you like to do?</Text>
          <Button
            buttonText="Search Existing Band Names"
            onPress={() => this.props.navigation.navigate('SearchNames')}
            backgroundColor="#63458A"
          ></Button>
          <Button
            buttonText="Find Some Inspiration"
            onPress={() => this.props.navigation.navigate('Home')}
            backgroundColor="#63458A"
          ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4B7E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#9A48D0',
    fontSize: 30
  }
});