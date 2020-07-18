
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Welcome from './src/Screen/Welcome'
import Login from './src/Screen/Login'
import Navigation from './src/Screen/Navigation'
import Test from './src/Test'
import Interducing from './src/Screen/Interducing'
import WelcomeTutor from './src/Screen/WelcomeTutor'
import Tutor_form from './src/Screen/Tutor_form'
const App: () => React$Node = () => {
  return (
    <>
      <Navigation/>
    </>
  ); 
};

const styles = StyleSheet.create({
 
   
  
});

export default App;
   //npm i https://github.com/noway/react-native-material-dropdown
