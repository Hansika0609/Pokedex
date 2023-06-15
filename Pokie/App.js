import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './src/Components/Search/SearchPage';
import DetailsPage from './src/Components//Details/DetailsPage';
import styles from './src/Components/Search/SearchStyle';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchPage} options={{ title: 'Pokédex' }} />
          <Stack.Screen name="Details" component={DetailsPage} options={{ title: 'Details' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
