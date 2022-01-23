import {Box, Typography, Button} from "@mui/material";
import NavBar from "../NavBar";
import HomeBanner from "./HomeBanner";
import HSlide from "./slides/HSlide";
import Footer from '../Footer';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getHomeSlides as listHomeSlides} from '../../redux/actions/homeAction';
import ReactPlayer from 'react-player/lazy'
import { makeStyles } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const useStyles = makeStyles(theme=>({
  container:{
    display:"flex",
    [theme.breakpoints.down('sm')]: {
      display:"none",
     },
     [theme.breakpoints.between('sm', 'md')]: {
      display:"flex",
     },
  },
   videoText:{
      display:"flex",
      flexDirection:"column",
      width:"50vw",
      zIndex:3,
      height:"64%",
      background:" linear-gradient(to right, #0f171e 40%, transparent 88%)",
      color:"#ffffff",
      position:"absolute",
      marginLeft:150,
      marginTop:20,
      [theme.breakpoints.between('sm','md')]: {
        background:" linear-gradient(to right, #0f171e 70%, transparent 88%)",
        height:"34%"
       },
      [theme.breakpoints.between('md','lg')]: {
        background:" linear-gradient(to right, #0f171e 50%, transparent 88%)",
        height:"64%"
       },
       [theme.breakpoints.up('lg')]: {
        background:" linear-gradient(to right, #0f171e 43%, transparent 98%)",
        height:"64%"
       },
   },
   video:{
    marginTop:20,
    marginLeft:400
   },
   button:{
    backgroundColor: "#0F79AF !important",
    backgroundImage: "linear-gradient(to top,#0F79AF,#0F79AF)",
    color: "#fff",
    height: 40,
    width: 100,
    textTransform: "none",
    fontSize: 17,
    fontWeight: 700,
   
  },
  buttonContainer:{
    display: "table",
    padding:"16px 18px 16px 18px",
    minWidth: 280,
    fontSize: 17,
    borderRadius: "999 !important",
    marginLeft:-17,
    marginTop:-20,
  },
  icon:{
    boxSizing:"border-box",
    display:"inline-block",
    background:"#425265",
    borderRadius:"50%",
    padding:"5px, 15px",
    width: 45,
    height: 45,
    marginLeft: 20,
    marginTop: 10
},
box:{
  border: "1px solid #8197a4",
  borderRadius: "3px",
  backgroundColor: "rgba(15,23,30,.3)",
  color:" #8197a4",
  padding:" 1px 3px 2px",
  fontSize: "11px",
  lineHeight: "13px",
  fontWeight: 700,
  marginLeft:10,
  width:50
}
}))


const Home =()=>{
    const classes = useStyles();
    const { homeslides } = useSelector(state => state.getHomeSlides);

    const dispatch = useDispatch();
// each time the value of dispatch changes useeffect calls the dispatch func 
    useEffect(()=>{
       dispatch(listHomeSlides());
    },[dispatch] )

    return(
        <Box style={{background:"#0f171e"}}>
           <NavBar/>
           <HomeBanner />
           <HSlide 
             title="Recommended Movies"
             homeslides={homeslides}
           />
           <HSlide 
           title=""
           homeslides={homeslides}
         />
           <HSlide 
             title="Recently Added Movies"
             homeslides={homeslides}
           />
           <HSlide 
             title="Popular Movies"
             homeslides={homeslides}
           />
           <Box className={classes.container}>
             <Box className={classes.videoText}>
                <img style={{width:70, height:30, marginLeft:5, marginTop:20}} src="https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4.png"/>
                <Typography variant="h4" style={{fontWeight:600}}>Top 10 in India</Typography>
                <Typography variant="h4" style={{marginTop:130, fontWeight:600}}>Shershaah</Typography>
                <Typography>Action<span className={classes.box}>U/A 13+</span></Typography>
                <Box className={classes.buttonContainer}>
                     <Button variant="contained" className={classes.button}><PlayArrowIcon style={{width:40, height:40}}/>Play</Button>
                     <span className={classes.icon}><AddIcon style={{width: 44, height:30, textAlign:"center", marginTop: 5}}/></span>
                    </Box>
             </Box>
             <Box className={classes.video}>
               <ReactPlayer 
               playing={true}
               loop={true}
               muted={false}
               width="100%"
               url='https://s3-bom-ww.cf.trailer.row.aiv-cdn.net/9997/fa13/cd52/405b-8f4a-51ac1490b270/3ac3c4dc-d992-47e9-a64b-a186a952c19c_video_300_audio_aaclc_128.mp4?Expires=1641763838&amp;Signature=RWPWesul6~AWUWUlWYqyoZk0kn3YSKyehlcTEOekMMEqybQNUIinc5WnWE8krMvUX0k0E16ltRizeErEEgBMtIQsKs4r9yyV8PRfGDmY67VuNrGCKF9fw6ydYvEzEdSEuUPfXsL4QcenjTDEWHuRfywOE8axuwVbbsHofRLVhNP-iQmj8vuahbREY9cBh5oWvuWU4nZZ4iH-RqP37cXe9kneFBqTyFTSE9NlI3Mxi6jMTJuRNKA0uPGmcuM9y8fDS~lJ-LKeXRTdZI9EUXjDr5th-ESl4C9LnBy0ujxLWFcUPKrvcb2ts08pdfcIX5ifB0Ncg1tyqYGS0h95yG~Cxg__&amp;Key-Pair-Id=APKAJIYEUF5P2E3CCYTA' />
             </Box>
           </Box>
           <HSlide 
             title="Crime Movies"
             homeslides={homeslides}
           />
           <HSlide 
             title="Amazon Original Movies"
             homeslides={homeslides}
           />
           <Footer />
        </Box>
    )
}

export default Home;