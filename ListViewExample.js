import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet } from 'react-native';
import ListItemExample from './ListItemExample';

const customStyles = StyleSheet.create({
  text: {
    fontWeight: '300',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#F4FCFF',
    padding: '5%',
    lineHeight: 1,
    width: '100%',
    color: '#333'
  }
});

class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    };

  }

  _fetchData() {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((responseData) =>
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(responseData)
    }))
  }

  componentDidMount() {
    this._fetchData()
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text style={customStyles.text}>{this.state.dataSource.getRowCount()} Items</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListItemExample  image={rowData.url} text={rowData.title} {...rowData} />}
        />
      </View>
    );
  }
}



// App registration and rendering
export default ListViewBasics;
// AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);
