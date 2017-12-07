
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import ElementView from '../ElementView'

const exampleElement = {
  id: '1.03',
  title: 'Tolles-Teil',
  description: 'Tolles Teil mit 5/1 Drehung und ganz viel Spannung im Körper',
}

export default class RoutineScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ElementView element={exampleElement} />
      </View>
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
