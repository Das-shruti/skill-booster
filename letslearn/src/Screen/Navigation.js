import React , {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome'
import Login from '../Screen/Login'
import Interducing from "../Screen/Interducing";
import WelcomeTutor from '../Screen/WelcomeTutor'
import Tutor_form from '../Screen/Tutor_form';
import Selected_community from '../Screen/Selected_community'

const Stack = createStackNavigator();

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator 
                 screenOptions={{
                    headerShown: false,
                  }}
                >
                    <Stack.Screen name="Welcome" component={Welcome} />
                    {/* <Stack.Screen name="Welcome" component={Login} /> */}
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Interducing" component={Interducing} />
                    <Stack.Screen name="WelcomeTutor" component={WelcomeTutor} />
                    <Stack.Screen name="Tutor_form" component={Tutor_form} />
                    <Stack.Screen name="Selected_community" component={Selected_community} />
                </Stack.Navigator>
            </NavigationContainer>

        );
    }
}

export default Navigation;