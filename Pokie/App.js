import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchPage from "./src/Components/Search/SearchPage";
import DetailsPage from "./src/Components/Details/DetailsPage";
import BookmarksScreen from "./src/Components/Bookmarks/BookmarksScreen";
import { BookmarksProvider } from "./src/Components/BookmarksContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BookmarksProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Search"
            component={SearchPage}
            options={{ title: "Pokédex" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsPage}
            options={{ title: "Details" }}
          />
          <Stack.Screen
            name="Bookmarks"
            component={BookmarksScreen}
            options={{ title: "Bookmarks" }}
          />
        </Stack.Navigator>
      </BookmarksProvider>
    </NavigationContainer>
  );
};

export default App;
