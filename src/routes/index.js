import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import HomeScreen from '../screens/home';
import OrderScreen from '../screens/order';

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ()=> ({
      header: null
    })
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: ()=> ({
      headerStyle: {
        backgroundColor: 'red',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: '#fff',
    })  
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ()=> ({
      // headerTitle: 'Home',
      headerTitleStyle: {
        color: 'white',
        fontWeight: 'bold'
      },
      headerStyle: {
        backgroundColor: 'red',
        // elevation: 0,
        // // shadowOpacity: 0
    },
    headerTintColor: '#fff',
    })
  },
  OrderScreen: {
    screen: OrderScreen,
    navigationOptions: ()=> ({
     header: null
    })
  }
});

export default createAppContainer(AppNavigator);