import {Box, Typography} from "@mui/material";
import NavBar from "../NavBar";
import TvBanner from "./TvBanner";
import TSlide from "./slides/TSlide";
import Footer from '../Footer';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getTvSlides as listTvSlides} from '../../redux/actions/tvAction';


const TV =()=>{
    const { tvslides } = useSelector(state => state.getTvSlides);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listTvSlides());
    },[dispatch] )

    return(
        <Box style={{background:"#0f171e"}}>
           <NavBar/>
           <TvBanner />
           <TSlide 
           title="Top-rated TV shows on IMDb"
           tvslides={tvslides}
          />
          <TSlide 
           title="Amazon Original Series"
           tvslides={tvslides}
          />
          <TSlide 
           title="TV shows we think you'll like"
           tvslides={tvslides}
          />
          <TSlide 
           title="Drama TV"
           tvslides={tvslides}
          />
          <TSlide 
           title="Popular TV"
           tvslides={tvslides}
          />
          <TSlide 
           title="Comedy TV"
           tvslides={tvslides}
          />
          <Footer />
        </Box>
    )
}

export default TV;