import axios from "axios";
import * as actions from '../constants/tvConstants';


//async() is a thunk
export const getTvSlides= ()=> async(dispatch)=>{
    try {
        const {data} = await axios.get(`/tvslides`)
        //part in dispatch curly braces is the action objects
        dispatch({type: actions.GET_TSLIDES_SUCCESS, payload: data});
        // dispatch then calls the reducer
    } catch (error) {
        dispatch({type: actions.GET_TSLIDES_FAIL, payload: error.response});
    }
}

export const getTvSlideDetails =(id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`/tvslide/${id}`);
        dispatch({type: actions.GET_TSLIDES_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: actions.GET_TSLIDES_DETAILS_FAIL, payload: error.reponse});
    }
}