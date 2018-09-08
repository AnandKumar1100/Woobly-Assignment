import React from "react";
import { StackNavigator } from 'react-navigation'

import RestaurantDetailsScreen from "../Screens/RestaurantDetails"
import ExploreRestaurantScreen from "../Screens/ExploreRestaurant"
import LoginScreen from "../Screens/LoginScreen"

const PrimaryNav = StackNavigator(
    {
        RestaurantDetailsScreen : {screen : RestaurantDetailsScreen},
        ExploreRestaurantScreen : {screen : ExploreRestaurantScreen},
        LoginScreen : {screen : LoginScreen}
    },
    {
        // initialRouteName: "RestaurantDetailsScreen",
        initialRouteName: "LoginScreen",
        headerMode : "none"
    }
);

export default PrimaryNav 