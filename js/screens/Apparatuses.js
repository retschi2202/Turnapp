import React from 'react'
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const data = [
    'Sprung',
    'Barren',
    'Balken',
    'Boden'
]

class Apparatuses extends React.Component {
    onPressItem = (item) => {
        this.props.navigation.navigate('Apparatus', { apparatus: item })
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
            <TouchableOpacity style={styles.row} onPress={() => { this.onPressItem(item) }}>
                <View style={styles.leftCol}>
                    <Image style={styles.icon} source={require('../../images/Sprung.png')} />
                </View>
                <View style={styles.midCol}>
                    <Text style={styles.apparatusLabel}>
                        {item}
                    </Text>
                </View>
                <View style={styles.rightCol}>
                    <Icon name="ios-arrow-forward" size={32} color="#999" />
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={data}
                keyExtractor={item => item}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    leftCol: {
        padding: 12
    },
    midCol: {
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'center'
    },
    apparatusLabel: {
        fontSize: 30
    },
    rightCol: {
        justifyContent: 'center',
        padding: 12
    },
    icon: {
        height: 48,
        width: 48
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

export default Apparatuses