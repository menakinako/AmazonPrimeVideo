import axios from "axios";
import * as actions from '../constants/homeConstants';


//async() is a thunk
export const getHomeSlides= ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`/homeslides`)
        //part in dispatch curly braces is the action objects
        dispatch({type: actions.GET_HOMESLIDES_SUCCESS, payload: data});
        // dispatch then calls the reducer
    } catch (error) {
        dispatch({type: actions.GET_HOMESLIDES_FAIL, payload: error.response});
    }
}

export const getHomeSlideDetails =(id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`/homeslide/${id}`);
        dispatch({type: actions.GET_HSLIDES_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: actions.GET_HSLIDES_DETAILS_FAIL, payload: error.reponse});
    }
}