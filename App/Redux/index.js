import {createStore, combineReducers} from 'redux'

import RestaurantDetailsRedux from './RestaurantDetailsRedux'
import { reducer as form } from 'redux-form';

const AppReducer = combineReducers({
    RestaurantDetailsRedux,
    form
})

const RootReduer = (state, action) =>{
    return AppReducer(state, action)
}

const store = createStore(RootReduer)

export default store