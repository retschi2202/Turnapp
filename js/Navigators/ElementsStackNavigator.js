import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import Apparatuses from '../screens/Apparatuses'
import Apparatus from '../screens/Apparatus'

const ElementsStackNavigator = StackNavigator({
    Apparatuses: {
        screen: Apparatuses,
        navigationOptions: {
            title: 'Geräte'
        }
    },
    Apparatus: {
        screen: Apparatus
    },
    Elements: {
        screen: View
    }
})

export default ElementsStackNavigator