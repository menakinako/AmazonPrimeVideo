import React, {useState} from "react";
import { makeStyles, MenuItem, Menu, Typography } from "@material-ui/core";
import { Box } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const useStyles = makeStyles(theme=>({
    container:{
      display:"flex",
    },
    image:{
       width:36,
       height:34,
       marginLeft:30,
       [theme.breakpoints.down('sm')]:{
        width:18,
        height:30,
        marginLeft:-20,
      }
    },
    name:{
        marginLeft:5,
        color: '#a9b4b9fd',
        marginTop: 5,
        cursor:"pointer"
    }
}))


const Profile =({account, setAccount})=>{
  const classes = useStyles();
  const [open, setOpen]= useState(false);

  const handleClose =()=>{
    setOpen(false);
   }

  const handleClick =(event)=>{
    setOpen(event.currentTarget);
  }

  const logout=()=>{
    setAccount('');
  }
    
    return(
        <Box className={classes.container} >
          <img className={classes.image} src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"/>&nbsp;
          <Typography variant="subtitle1" onClick={handleClick} className={classes.name}>{account}</Typography>
          <ArrowDropDownIcon style={{marginTop:7, color: '#a9b4b9fd'}}/>
          <Menu
         anchorEl={open}
         open={Boolean(open)}
         onClose={handleClose}
         PaperProps={{
          style: {
           color: "#8197a4",
           background:"#0f171e",
           marginTop:50
         },
       }}
        >
        <MenuItem><Typography>Your WatchList</Typography></MenuItem>
        <MenuItem><Typography>Account & Setting</Typography></MenuItem>
        <MenuItem><Typography>Watch Anywhere</Typography></MenuItem>
        <MenuItem><Typography>Help</Typography></MenuItem>
        <MenuItem onClick={() =>{handleClose(); logout();}}>
            <Typography className={classes.logout}>Not {account}? Sign Out</Typography>
        </MenuItem>
      </Menu>
        </Box>
    )
}

export default Profile;