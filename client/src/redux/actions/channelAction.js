import axios from "axios";
import * as actions from '../constants/channelConstants';


//async() is a thunk
export const getChannelSlides= ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`/channelslides`)
        //part in dispatch curly braces is the action objects
        dispatch({type: actions.GET_CSLIDES_SUCCESS, payload: data});
        // dispatch then calls the reducer
    } catch (error) {
        dispatch({type: actions.GET_CSLIDES_FAIL, payload: error.response});
    }
}

export const getChannelSlideDetails =(id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`/channelslide/${id}`);
        dispatch({type: actions.GET_CSLIDES_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: actions.GET_CSLIDES_DETAILS_FAIL, payload: error.reponse});
    }
}