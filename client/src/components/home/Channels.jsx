import {Box, Typography} from "@mui/material";
import NavBar from "../NavBar";
import ChannelBanner from "./ChannelBanner";
import CSlide from "./slides/CSlide";
import Footer from '../Footer';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getChannelSlides as listChannelSlides} from '../../redux/actions/channelAction';


const Channels =()=>{
    const { channelslides } = useSelector(state => state.getChannelSlides);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listChannelSlides());
    },[dispatch] )

    return(
        <Box style={{backgroundColor:"#0f171e"}}>
           <NavBar/>
           <ChannelBanner />
           <CSlide 
           title="Subscribe to Channels"
           channelslides={channelslides}
          />
          <CSlide 
           title="ho!cho! Most Popular"
           channelslides={channelslides}
          />
          <CSlide 
           title="discovery+ Most Popular"
           channelslides={channelslides}
          />
          <CSlide 
           title="MUBI Most Popular"
           channelslides={channelslides}
          />
          <CSlide 
           title="manorama Most Popular"
           channelslides={channelslides}
          />
          <CSlide 
           title="SHORTSTV Most Popular"
           channelslides={channelslides}
          />
          <Footer/>
          
        </Box>
    )
}

export default Channels;