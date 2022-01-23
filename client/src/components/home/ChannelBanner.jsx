import React from "react";
import Carousel from "react-material-ui-carousel";
import { cbanner } from "../../fixtures/data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme =>({
    image:{
        width: "100%",
        height: 250,
        [theme.breakpoints.down('sm')]:{
            objectFit :"cover",
            height: 80,
        },
        [theme.breakpoints.between('sm', 'md')]:{
            height: 120,
         },
         [theme.breakpoints.between('md', 'lg')]:{
            height:150
        },
        [theme.breakpoints.up('lg')]:{
            height:250
        },
    },
    carousel:{
        marginTop: 75,
        height: 250,
        [theme.breakpoints.down('sm')]:{
            marginBottom:-160
        },
        [theme.breakpoints.between('sm', 'md')]:{
            marginBottom:-130
         },
        [theme.breakpoints.between('md', 'lg')]:{
            marginBottom:-100
         },
         [theme.breakpoints.up('lg')]:{
            marginBottom:10
        },
    },
    arrow:{
        [theme.breakpoints.down('lg')]:{
            display:"none"
        },
        [theme.breakpoints.up('lg')]:{
            display:"block",
        },
    }
}))

const ChannelBanner =()=>{
    const classes = useStyle();
    return(
        <Carousel
        autoPlay={true}
        animation='slide'
        indicators={true}
        showDots={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        NextIcon={<img className={classes.arrow} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljc2MyAxNy4yMzd2LTIuNDc0bC0xNCAxNGExLjc0OCAxLjc0OCAwIDAwMCAyLjQ3NGMuNjgzLjY4NCAxLjc5LjY4NCAyLjQ3NCAwbDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMDAwLTIuNDc0bC0xNC0xNEExLjc1IDEuNzUgMCAwMC43NjMgMy4yMzdsMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+"/>}
        PrevIcon={<img className={classes.arrow} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuMjM3IDE3LjIzN3YtMi40NzRsMTQgMTRjLjY4NC42ODMuNjg0IDEuNzkgMCAyLjQ3NGExLjc0OCAxLjc0OCAwIDAxLTIuNDc0IDBsLTE0LTE0YTEuNzQ4IDEuNzQ4IDAgMDEwLTIuNDc0bDE0LTE0YTEuNzQ4IDEuNzQ4IDAgMDEyLjQ3NCAwYy42ODQuNjgzLjY4NCAxLjc5IDAgMi40NzRsLTE0IDE0eiIgZmlsbD0iI0VGRjFGMSIvPjwvc3ZnPg=="/>}
        navButtonsProps={{
            style:{
                background: "transparent",
                color: "#494949",
                borderRadius: 0,
                margin: 0,
                height: 60,
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '-30px', 
            }
        }}
        indicatorIconButtonProps={{
            style: {
                height:30,
                color: 'hsla(0,0%,100%,.3)',
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                color: '#ffffff' 
            }
        }}
        className={classes.carousel}
    >
    {
        cbanner.map( (image) => (
            <img src={image} className={classes.image}/>
        ) )
    }
</Carousel>
    )
}

export default ChannelBanner;