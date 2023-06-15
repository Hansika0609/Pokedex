import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './src/Components/Search/SearchPage';
import DetailsPage from './src/Components/DetailsPage';
import BookmarksScreen from './src/Components/BookmarksScreen';
import { BookmarksProvider } from './src/Components/BookmarksContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchPage} options={{ title: 'Pokédex' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
