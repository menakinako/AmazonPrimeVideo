import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Drawer, ListItem, List, Typography, Divider } from "@mui/material";
import Profile from "./Profile";
import Search from "./Search";
import HeaderButtons from "./HeaderButtons";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const useStyles = makeStyles(theme=>({
    customButtons:{
         marginTop:6,
         marginLeft: "200px", 
         color:"#ffffff",
         display: "flex",
         justifyContent:"space-around",
         height: 30,
         float:"right",
         [theme.breakpoints.down('sm')]:{
            marginLeft: "10px", 
         },
       [theme.breakpoints.between('sm', 'md')]:{
           marginLeft:"80px",
     },
       }, 
       customLink:{
        [theme.breakpoints.down('sm')]:{
          display: "none"
      }
       },
       short:{
        display:"none",
        [theme.breakpoints.down('sm')]:{
            display: "block"
        }
       },
       list:{
        backgroundColor:"#0f171e",
        color:"#fff",
        display:"flex"
       },
       drawerPaper:{
        marginTop:76
       },
}))



const HomeNav =({account, setAccount})=>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

    const list=()=>{
        return(
        <Box className={classes.list} >
            <List>
                <ListItem>
                   <HeaderButtons />
                   <Profile account={account} setAccount={setAccount}/>
                </ListItem>
            </List>
        </Box>
        )
    }

    return(
        <Box style={{display:"flex"}}>
           <Box className={classes.customLink}><HeaderButtons/></Box> 
            <span className={classes.short}><Typography onClick={handleOpen} 
            style={{ marginTop:10,marginLeft:"10px", fontSize:14,color:"#8197a4", display:"flex"}}>
              Browse<span ><ArrowDropDownIcon style={{ color: '#a9b4b9fd', width:20, height:20}}/></span>
            </Typography></span>
           <Drawer anchor={'top'} open={open} onClose={handleClose} onClick={handleClose}
           classes={{
            paper: classes.drawerPaper
           }}>
                   {list()}
                </Drawer>
           <span className={classes.customButtons}>
               <Search />
               <Profile account={account} setAccount={setAccount} />
           </span>
        </Box>
    )
}

export default HomeNav;