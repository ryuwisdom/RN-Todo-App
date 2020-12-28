import React, { useState } from 'react';
// import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Pages/Main';
import TodoList from './Pages/TodoList';

// const getFonts = () =>
//   Font.loadAsync({
//     'Gaegu-Light': require('./assets/fonts/Gaegu-Light.ttf'),
//     'Gaegu-Regular': require('./assets/fonts/Gaegu-Regular.ttf'),
//     'Gaegu-Bold': require('./assets/fonts/Gaegu-Bold.ttf'),
//   });

function App() {
  const store = createStore(rootReducer);
  const Stack = createStackNavigator();
  // let [fontsLoaded] = useFonts({
  //   'Gaegu-light': require('./assets/fonts/Gaegu-Light.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={Main} />
          <Stack.Screen name='TodoList' component={TodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// return (
//   <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Main' component={Main} />
//         <Stack.Screen name='TodoList' component={TodoList} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </Provider>
// );

export default App;
