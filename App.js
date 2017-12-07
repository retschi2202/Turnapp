
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import TabNavigator from './js/Navigators/TabNavigator'
import ElementView from './js/ElementView'



export default class App extends Component<{}> {
  render() {
    return (
      <TabNavigator style={styles.container}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
})
