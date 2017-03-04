/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import ListViewExample from './ListViewExample';

export default class listViewTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text style={styles.header}>Awesome Todo App</Text>
        <ListViewExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  StatusBar: {
    backgroundColor: '#333'
  },
  header: {
    alignItems: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    paddingBottom: 10,
    paddingTop:30,
    textAlign: 'center',
    backgroundColor: '#0ACDAD',
    width: '100%'
  },
});

AppRegistry.registerComponent('listViewTest', () => listViewTest);
