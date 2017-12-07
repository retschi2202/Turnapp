import { TabNavigator } from 'react-navigation';
import RoutinesStackNavigator from './RoutinesStackNavigator'
import ElementsStackNavigator from './ElementsStackNavigator'
import MoreStackNavigator from './MoreStackNavigator'

const MyTabNavigator = TabNavigator({
    ElementsTab: {
        screen: ElementsStackNavigator,
        navigationOptions: {
            tabBarLabel: 'Elemente'
        }
    },
    RoutineTab: {
        screen: RoutinesStackNavigator
    },
    MoreTab: {
        screen: MoreStackNavigator
    }
});

export default MyTabNavigator