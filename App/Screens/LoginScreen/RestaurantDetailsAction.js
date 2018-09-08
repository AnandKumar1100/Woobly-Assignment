import * as types from './ActionTypes'

export function SaveRestaurantDetails() {
    return {
        type: types.SAVE_RESTAURANT_DETAILS
    };
}

export function saveFormValues(formValues){
    return {
        type : types.SAVE_FORM_VALUES,
        payload : formValues
    }
}