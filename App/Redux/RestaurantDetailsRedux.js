import * as constants from '../Constants'
import * as Types from '../Screens/LoginScreen/ActionTypes'

const RestaurantDetailsRedux = (state={restaurantDetails : null, userDetails : null}, actions) =>{
    switch(actions.type){
        case Types.SAVE_RESTAURANT_DETAILS :
            return Object.assign({}, state, {restaurantDetails : constants.photos})
        case Types.SAVE_FORM_VALUES :
            return Object.assign({}, state, {userDetails : actions.payload})
        default : return state

    }
}

export default RestaurantDetailsRedux