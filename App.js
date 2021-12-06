import React from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./app/screens/LoginScreen";
import CreateAccount from "./app/screens/CreateAccountScreen";
import Homestack from "./app/screens/HomepageScreen";

//Creates navigation stack to move to other screens
const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: "#007bff",
            },
            headerTintColor: "white",
          }}
        />

        <MainStack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            title: "Sign up",
            headerStyle: {
              backgroundColor: "#007bff",
            },
            headerTintColor: "white",
          }}
        />

        <MainStack.Screen
          name="Homepage"
          component={Homestack}
          options={({ route }) => ({ 
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerStyle: {
              backgroundColor: "#007bff",
            },
            headerTintColor: "white",
          })}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
