
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
