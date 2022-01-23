import React from "react";
import { Box, makeStyles, Typography } from '@material-ui/core'
import logo from '../images/logon.png'

const useStyles = makeStyles(theme=>({
    container:{
        backgroundColor:"#0f171e",
        height: 150
    },
    image:{
        paddingTop: 30,
        maxHeight: 63,
        width: 120,
        height: 140
    }
}))


const Footer =()=>{
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <Box style={{textAlign:"center"}}>
              <img src="https://i2.wp.com/zeevector.com/wp-content/uploads/LOGO/prime-video-logo-white.png?fit=2100%2C645&ssl=1" className={classes.image}/>
            </Box>
            <Box>
              <Typography style={{color:"#949494", textAlign:"center"}}><span style={{color:"#0f79af"}}>Terms and Privacy Notice Send us feedback Help</span> © 1996-2021, Amazon.com, Inc. or its affiliates</Typography>
            </Box>
        </Box>
    )
}

export default Footer;