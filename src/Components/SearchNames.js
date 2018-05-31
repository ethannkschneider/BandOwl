import React from "react";
import { StyleSheet, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Text } from 'native-base';
import Button from './Button';

export default class SearchNames extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.headerText}>Search Existing Band Names</Text>
        <Item style={styles.itemStyle}>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
        </Item>
      </Container>
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
    fontSize: 25
  }
});
