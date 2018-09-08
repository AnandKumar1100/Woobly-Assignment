import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import AppNavigation from './App/Navigation/AppNavigation'
import {Provider} from 'react-redux'
import store from "./App/Redux"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AppNavigation/>
      </Provider>
    );
  }
}
