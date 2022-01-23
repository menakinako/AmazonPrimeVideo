import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getHomeSlidesReducer, getHomeSlideDetailReducer } from './reducers/homeReducer';
import { getTvSlidesReducer, getTvSlideDetailReducer } from './reducers/tvReducer';
import { getChannelSlidesReducer, getChannelSlideDetailReducer } from './reducers/channelReducer';


const reducer = combineReducers({
    getHomeSlides: getHomeSlidesReducer,
    //calling this api(getproductdetails) from ui
    getHomeSlideDetails: getHomeSlideDetailReducer,
    getTvSlides: getTvSlidesReducer,
    //calling this api(getproductdetails) from ui
    getTvSlideDetails: getTvSlideDetailReducer,
    getChannelSlides: getChannelSlidesReducer,
    //calling this api(getproductdetails) from ui
    getChannelSlideDetails: getChannelSlideDetailReducer
}) 
const  middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;