//

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ratings = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

class ElementView extends React.Component {
  state = {
    isFav: false,
  }

  onFavPress = () => {
    this.setState((state) => {
      return {
        isFav: !state.isFav
      }
    })
  }

  render() {
    const { id } = this.props
    const { isFav } = this.state
    const lastCharOfId = id.substring(id.length - 1, id.length)
    const ratingIndex = Number(lastCharOfId)
    const rating = ratings[ratingIndex]

    const favIconName = isFav ? 'ios-heart' : 'ios-heart-outline'

    return (
      <View style={styles.container}>
        <View style={styles.leftCol}>
          <View style={styles.ratingLabelContainer}>
            <Text style={styles.ratingLabel}>
              {rating}
            </Text>
          </View>
          <View style={styles.spacer}>
            <View />
          </View>
          <TouchableOpacity style={styles.favButtonContainer} onPress={this.onFavPress}>
            <Icon name={favIconName} size={30} color="#900" />
          </TouchableOpacity>
        </View>
        <View style={styles.midCol}>
          <View style={styles.elementIdContainer}>
            <Text style={styles.elementIdLabel}>
              {id}
            </Text>
          </View>
          <View style={styles.imageContainer}>
          <Image source={require('../images/Test1.png')} style={styles.image} 
          />
          </View>
          <View style={styles.titelContainer}>
          </View>
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
  elementIdContainer: {
    height: 40,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elementIdLabel: {
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
  titelContainer: {
    height: 40,
    backgroundColor: 'lightgreen'
  },
  rightCol: {
    width: 40,
    backgroundColor: 'green',
  },
  ratingLabelContainer: {
    height: 40,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingLabel: {
    fontSize: 20,
  },
  favButtonContainer: {
    height: 40,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
})

export default ElementView
