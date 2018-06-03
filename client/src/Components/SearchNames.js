import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import { Container, Header, Item, Input, Icon, Text } from 'native-base';
import Button from './Button';

export default class SearchNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'enter band name here',
      searchResults: [],
      isLoading: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.loadingMessage = 'searching plz hold';
  }

  handleChangeText(searchText) {
    this.setState({searchText});
  }

  renderSearchResults() {
    if (this.state.searchResults.length === 0) {
      return 'Nice! It appears that name is available';
    } else {
      return this.renderListItems();
    }
  }

  renderListItems () {
    return (
      <FlatList>
        data={this.state.searchResults}
        renderItem={({item}) => <Text>{item.name}___HELLO</Text>}
      </FlatList>
    );
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.headerText}>Search Existing Band Names</Text>
          <Item style={styles.itemStyle}>
            <Icon name="ios-search" />
            <Input
              onChangeText={this.handleChangeText}
              placeholder="enter band name here" />
          </Item>
        </View>
        <View style={styles.bottomView}>
          <Text>{this.state.isLoading ?
            this.loadingMessage : this.renderSearchResults()}
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F2FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#2A2B2A',
    fontSize: 25
  },
  itemStyle: {
    width: '90%'
  },
  topView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15
  },
  bottomView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
