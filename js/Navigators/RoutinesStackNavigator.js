import { StackNavigator } from 'react-navigation'
import { View } from 'react-native';

const RoutinesStackNavigator = StackNavigator ({
    RoutineList: {
        screen: View
    },
    Routines: {
        screen: View
    }
})

export default RoutinesStackNavigator