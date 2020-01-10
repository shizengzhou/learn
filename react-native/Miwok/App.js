import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Home from './pages/Home';
import Numbers from './pages/Numbers';
import FamilyMembers from './pages/FamilMembers';
import Colors from './pages/Colors';
import Phrases from './pages/Phrases';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home, navigationOptions: () => ({title: 'Miwok'})},
    Numbers: {screen: Numbers, navigationOptions: () => ({title: 'Numbers'})},
    FamilyMembers: {
      screen: FamilyMembers,
      navigationOptions: () => ({title: 'Family Members'}),
    },
    Colors: {screen: Colors, navigationOptions: () => ({title: 'Colors'})},
    Phrases: {screen: Phrases, navigationOptions: () => ({title: 'Phrases'})},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#4a312a',
      },
      headerTintColor: '#fff',
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
