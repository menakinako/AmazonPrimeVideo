import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getTvSlides as listTvSlides} from '../../redux/actions/tvAction';
import TSlide from '../home/slides/TSlide'

const HRSlide=()=>{
    const { tvslides } = useSelector(state => state.getTvSlides);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listTvSlides());
    },[dispatch] )
    return(
        <Box>
          <TSlide 
           title="Customer also watched"
           tvslides={tvslides}
          />
        </Box>
    )
}

export default HRSlide;