import * as actionType from '../constants/tvConstants'


export const getTvSlidesReducer=(state = {tvslides: []}, action)=>{
    switch (action.type) {
        case actionType.GET_TSLIDES_SUCCESS:
            return {tvslides: action.payload}
        case actionType.GET_TSLIDES_FAIL:
            return {error: action.payload}
        default:
            return state
          
    }
}

export const getTvSlideDetailReducer=(state = {tvslide:{}}, action)=>{
    switch (action.type) {
        case actionType.GET_TSLIDES_DETAILS_SUCCESS:
            return {tvslide: action.payload}
        case actionType.GET_TSLIDES_DETAILS_FAIL:
                return {error: action.payload}    
        default:
           return state;
    }
}