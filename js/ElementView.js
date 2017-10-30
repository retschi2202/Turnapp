//

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ElementView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftCol}>
          <View style={styles.ratingLabel}>
            <View />
          </View>
          <View style={styles.spacer}>
            <View />
          </View>
          <View style={styles.favButton}>
            <View />
          </View>
        </View>
        <View style={styles.midCol}>
          <View />
        </View>
        <View style={styles.rightCol}>
          <View />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  leftCol: {
    width: 40,
    backgroundColor: 'green',
  },
  midCol: {
    flex: 1,
    backgroundColor: 'orange',
  },
  rightCol: {
    width: 40,
    backgroundColor: 'green',
  },
  ratingLabel: {
    height: 40,
    backgroundColor: 'lightblue',
  },
  favButton: {
    height: 40,
    backgroundColor: 'lightblue',
  },
  spacer: {
    flex: 1,
  },
})

export default ElementView
