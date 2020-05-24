import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/LoginScreen'
import ChatScreen from './screens/ChatScreen'


const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    headerMode: "none"
  }
)
 
const App = createAppContainer(AppNavigator);
export default App;

// primeira parte
/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/