import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'

const data = [
    { id: 1, name: 'Gymnastische Sprünge' },
    { id: 2, name: 'Gymnastische Drehungen' }
]

class Apparatus extends Component {
    static navigationOptions = (options) => {
        return {
            title: options.navigation.state.params.apparatus
        }
    }

    renderSeparator() {
        return (
            <View style={styles.separatorRow}>
                <View style={styles.separator} />
            </View>
        )
    }

    renderItem = (options) => {
        const { item } = options

        return (
            <View style={styles.row}>
                <View style={styles.leftCol}>
                    <Text>
                        {item.id}
                    </Text>
                </View>
                <View style={styles.midCol}>
                    <Text>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.rightCol}>
                </View>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.renderSeparator}
            />
        )
    }
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    leftCol: {
        padding: 12
    },
    midCol: {
        paddingVertical: 12
    },
    rightCol: {
        padding: 12
    },
    separatorRow: {
        backgroundColor: 'white'
    },
    separator: {
        height: 1,
        backgroundColor: '#999',
        marginLeft: 12
    }
})

export default Apparatus