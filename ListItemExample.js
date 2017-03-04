import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingBottom: 5,
    borderBottomColor: '#DADADA',
    flexDirection: 'row',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 0.5
  },
  image: {
    backgroundColor: 'tomato',
    width: 50,
    height: 50,
    resizeMode: 'cover'

  },
  text: {
    width: '80%',
    alignItems: 'center',
    color: '#555',
    fontSize: 14,
    fontWeight: '300',
    padding:10,
    textAlign: 'left'
  }

});

class ListItemExample extends React.Component {
  render() {
    return (
        <View key={this.props.id} style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: this.props.image}}
          />
          <Text style={styles.text}>
            {this.props.text}
          </Text>
        </View>
    )
  }
}

export default ListItemExample;
