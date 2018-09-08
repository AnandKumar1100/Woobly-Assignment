import {createStore, combineReducers, applyMiddleware} from 'redux'

import RestaurantDetailsRedux from './RestaurantDetailsRedux'
import { reducer as form } from 'redux-form';

import firebase from 'react-native-firebase';
import * as commonConstants from '../Constants'

const customMiddleWare = store => next => action => {
    if(action.type == commonConstants.SAVE_FORM_VALUES){
    firebase.analytics().setCurrentScreen("Login");
    firebase.analytics().logEvent(`Page_${"Login"}`, {});
    }
    next(action);
  }


  const AppReducer = combineReducers({
    RestaurantDetailsRedux,
    form
})

const RootReduer = (state, action) =>{
    return AppReducer(state, action)
}

const store = createStore(RootReduer, applyMiddleware(customMiddleWare))

export default store