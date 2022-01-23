import * as actionType from '../constants/channelConstants'


export const getChannelSlidesReducer=(state = {channelslides: []}, action)=>{
    switch (action.type) {
        case actionType.GET_CSLIDES_SUCCESS:
            return {channelslides: action.payload}
        case actionType.GET_CSLIDES_FAIL:
            return {error: action.payload}
        default:
            return state
          
    }
}

export const getChannelSlideDetailReducer=(state = {channelslide:{}}, action)=>{
    switch (action.type) {
        case actionType.GET_CSLIDES_DETAILS_SUCCESS:
            return {channelslide: action.payload}
        case actionType.GET_CSLIDES_DETAILS_FAIL:
                return {error: action.payload}    
        default:
           return state;
    }
}