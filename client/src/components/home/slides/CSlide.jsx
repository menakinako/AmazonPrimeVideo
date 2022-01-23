import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Button, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
    }
  };

 const useStyle = makeStyles(theme=> ({
      image:{
          height: 150,
          width:"100%",
          [theme.breakpoints.down('sm')]:{
            height: 70,
        },
        [theme.breakpoints.between('sm', 'md')]: {
          height:130,
         },
         [theme.breakpoints.between('md', 'lg')]:{
          height:150
      }
      },
      component:{
          marginTop: 9,
          marginLeft: 50,
          [theme.breakpoints.down('sm')]:{
            marginLeft: 10,
        },
        [theme.breakpoints.between('sm', 'md')]:{
          marginLeft:50
       },
      },
      deal:{
          padding: '15px 20px',
          display:'flex',
      },
      dealText:{
          fontSize: 22,
          fontWeight: 600,
          lineHeight:'32px',
          marginLeft: -20,
          color:"#ffffff",
          marginBottom:-10
      },
      text:{
        fontSize: 14,
        marginTop: 5
      },
      icon:{
        [theme.breakpoints.down('sm')]: {
          display:"none"
        },
        [theme.breakpoints.between('md', 'lg')]:{
          marginLeft:-500
      }
      }
  }))


const CSlide =({ title, channelslides })=>{
    const classes = useStyle();

    return(
        <Box className={classes.component}>
            <Box className={classes.deal}>
               <Typography className={classes.dealText}>{title}<span style={{color:"#79B8F3",fontSize:13,margin:"0 0 0 8px"}}>See more</span></Typography>
            </Box>
        <Carousel 
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        autoPlay={false}
        keyBoardControl={true}
        showDots={false}
        //removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
           {
               channelslides.map(channelslides=>(
                 <Link to={`channelslide/${channelslides.id}`}>
                   <Box textAlign="center" style={{position:"relative"}}>
                     <Box>
                         <img src="https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg" style={{position:"absolute", zIndex:1, marginLeft:-608}} className={classes.icon}/>
                       </Box>
                       <img src={channelslides.url} className={classes.image}/>
                   </Box>
                  </Link>
               ))
           }
      </Carousel>
      </Box>
    )
}

export default CSlide;