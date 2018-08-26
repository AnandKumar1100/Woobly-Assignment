import React from "react";
import { StackNavigator } from 'react-navigation'

import RestaurantDetailsScreen from "../Screens/RestaurantDetails"

const PrimaryNav = StackNavigator(
    {
        RestaurantDetailsScreen : {screen : RestaurantDetailsScreen}
    },
    {
        initialRouteName: "RestaurantDetailsScreen",
        headerMode : "none"
    }
);

export default PrimaryNav 