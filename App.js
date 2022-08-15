import React from "react";
import CoverScreen from "./screens/Coverscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchWeather from "./screens/Searchweather";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CoverScreen"
          component={CoverScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchWeather"
          component={SearchWeather}
          options={{
            title: "Choose a city",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerShadowVisible: false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
