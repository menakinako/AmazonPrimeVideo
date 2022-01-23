import React, { useState, useContext } from 'react';
import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import bannerImg from '../images/banner.png'
import { ImportantDevices } from '@material-ui/icons';
import { LoginContext } from '../context/contextProvider';
import LoginDialog from  '../login/login'

const useStyles = makeStyles(theme=>({
    container:{
      display:"flex",
      marginTop: 76,
      backgroundImage: ` linear-gradient(to right, #000 40%, transparent 58%), url(${'https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg'})`,
      background:" linear-gradient(to right, #000 40%, transparent 58%)",
      height: "460px",
      width: "100%",
      [theme.breakpoints.down('sm')]:{
        display:"block",
        height: "540px",
        width: "100%",
     },
     [theme.breakpoints.between('sm', 'md')]:{
      backgroundImage: "none",
      backgroundColor:"#000000",
   },
   [theme.breakpoints.between('md', 'lg')]:{
    backgroundImage: ` linear-gradient(to right, #000 40%, transparent 58%), url(${'https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg'})`,
      background:" linear-gradient(to right, #000 40%, transparent 58%)",
 }
    },
    pane:{
        width: "50%",
        [theme.breakpoints.down('sm')]:{
          width:"100%"
       },
       [theme.breakpoints.between('sm', 'md')]:{
        width:"100%"
     }
    },
    title:{
      color:"#ffffff",
      fontSize: "2.8rem",
      fontWeight: 500,
      lineHeight: 1.2,
      paddingTop: 95,
      textAlign:"left",
      marginLeft: 70,
      [theme.breakpoints.down('sm')]:{
        fontSize:"1.8rem",
        marginLeft:0,
        paddingTop: 45,
        textAlign:"center",
     },
     
     [theme.breakpoints.between('sm', 'md')]:{
      marginLeft:70
   }
    },
    subTitle:{
      color:"#ffffff",
      paddingTop: 25,
      textAlign:"left",
      fontWeight: 200,
      marginLeft: 70,
      [theme.breakpoints.down('sm')]:{
        fontSize:"1.0rem",
        marginLeft:0,
        textAlign:"center",
     },
     [theme.breakpoints.between('sm', 'md')]:{
      marginLeft:70
   }
    },
    button:{
      backgroundColor: "#0F79AF !important",
      backgroundImage: "linear-gradient(to top,#0F79AF,#0F79AF)",
      color: "#fff",
      height: 55,
      width: 320,
      textTransform: "none",
      fontSize: 17,
      fontWeight: 700,
      [theme.breakpoints.down('sm')]:{
        fontSize:"1.0rem",
        width: 220,
        marginLeft:-10,
        fontWeight:100,
     },
     [theme.breakpoints.between('sm', 'md')]:{
      width: 420,
      marginLeft:150
   },
   [theme.breakpoints.between('md', 'lg')]:{
        width:320,
        marginLeft:0
    }
    },
    buttonContainer:{
      display: "table",
      margin: "38px auto 0 50px",
      padding:"16px 18px 16px 18px",
      minWidth: 280,
      fontSize: 17,
      borderRadius: 2,
      [theme.breakpoints.down('sm')]:{
        margin: "10px auto 0 20px",
     }
    },
    image:{
      display:"none",
      [theme.breakpoints.down('sm')]:{
        display:"block",
        width:"100%",
        height: 190
     },
     [theme.breakpoints.between('sm', 'md')]:{
      display:"block",
      height: 290
   },
   [theme.breakpoints.between('md', 'lg')]:{
    display:"none"
 }
    }
}))


const Banner =()=>{
    const classes = useStyles();
    const [loginOpen, setLoginOpen] = useState(false);
    const {account, setAccount} = useContext(LoginContext);

  const openDialog = () => {
   setLoginOpen(true);
 }

    return(
       <Box className={classes.container}>
          <Box className={classes.pane}>
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP._SX1440_CR575,0,865,675_QL80_AC_FP_.jpg" className={classes.image}/>
            <Typography variant="h3" className={classes.title}>Welcome to Prime Video</Typography>
            <Typography  variant="h5" className={classes.subTitle}>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</Typography>
            <Box className={classes.buttonContainer}>
              <Button variant="contained" className={classes.button} onClick={() => openDialog()}>Sign in to join Prime</Button>
              <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} setAccount={setAccount}/>
            </Box>
          </Box>
          <Box className={classes.pane}>
    
          </Box>
       </Box>
    )
}

export default Banner;