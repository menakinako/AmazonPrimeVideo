import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getHomeSlides as listHomeSlides} from '../../redux/actions/homeAction';
import HSlide from '../home/slides/HSlide';



const HRSlide=()=>{
    const { homeslides } = useSelector(state => state.getHomeSlides);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listHomeSlides());
    },[dispatch] )
    return(
      <Box>
        <HSlide 
             title="Customer also watched"
             homeslides={homeslides}
           />
      </Box>
    )
}

export default HRSlide;