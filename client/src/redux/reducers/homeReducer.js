import * as actionType from '../constants/homeConstants'


export const getHomeSlidesReducer=(state = {homeslides: []}, action)=>{
    switch (action.type) {
        case actionType.GET_HOMESLIDES_SUCCESS:
            return {homeslides: action.payload}
        case actionType.GET_HOMESLIDES_FAIL:
            return {error: action.payload}
        default:
            return state
          
    }
}

export const getHomeSlideDetailReducer=(state = {homeslide:{}}, action)=>{
    switch (action.type) {
        case actionType.GET_HSLIDES_DETAILS_SUCCESS:
            return {homeslide: action.payload}
        case actionType.GET_HSLIDES_DETAILS_FAIL:
                return {error: action.payload}    
        default:
           return state;
    }
}