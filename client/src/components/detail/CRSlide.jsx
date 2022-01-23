import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getChannelSlides as listChannelSlides} from '../../redux/actions/channelAction';
import CSlide from "../home/slides/CSlide";

const HRSlide=()=>{
    const { channelslides } = useSelector(state => state.getChannelSlides);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listChannelSlides());
    },[dispatch] )

    return(
      <Box>
       <CSlide 
           title="Customer also watched"
           channelslides={channelslides}
          />
      </Box>
    )
}

export default HRSlide;