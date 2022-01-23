import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Box, Typography, Drawer, ListItem, List, Grid  } from "@mui/material";
import { Link } from 'react-router-dom';
import A from '../../images/1c.png';
import B from '../../images/2c.png';
import C from '../../images/3c.png';
import D from '../../images/4c.png';
import E from '../../images/5c.png';

const useStyles = makeStyles(theme=>({
       customLinks:{
        marginLeft:"10%",
        marginTop: "8px",
        display: "flex",
        justifyContent:"space-between", 
        "& > *":{
           [theme.breakpoints.down('sm')]:{
              alignItems: "center",
              display: "flex",
              flexDirection:"column",
              marginTop: 10
            }
        },
        [theme.breakpoints.down('sm')]:{
            display: "block"
          }
       },
       links:{
        padding: "10px 20px 0 0",
        color:"rgba(242,244,246,.9)"
       },
       drawerPaper:{
        marginTop: 76
       },
       list:{
        backgroundColor:"#0f171e",
        color:"#fff",
       },
       gridImage:{
           width:100
       }
}))


const HeaderButtons=()=>{
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
        <Box sx={{width:'auto'}} className={classes.list} >
            <List>
                <Box style={{display:"flex", flexDirection:"row"}}>
                    <Box style={{width:"60%"}}>
                     <ListItem>
                       <Typography style={{marginTop:-170, marginLeft:60, fontWeight:600}}>Top&nbsp;Categories</Typography>
                       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop:50, marginLeft:-140}}>
                        <Grid item xs={4}>
                           <img src={A} className={classes.gridImage} />
                       </Grid>
                       <Grid item xs={4}>
                          <img src={B} className={classes.gridImage}/>
                       </Grid>
                      <Grid item xs={4}>
                      <img src={C} className={classes.gridImage}/>
                       </Grid>
                      <Grid item xs={4}>
                      <img src={D} className={classes.gridImage}/>
                      </Grid>
                       <Grid item xs={4}>
                       <img src={E} className={classes.gridImage}/>
                       </Grid>
                     </Grid>
                     </ListItem>
                    </Box>
                    <Box style={{width:"40%", display:"flex", flexDirection:"row", color:"#8197a4"}}>
                        <Box>
                          <ListItem>
                            <Box style={{display:"flex", flexDirection:"row", marginLeft:-50}}>
                                <Box style={{width:"50%", marginTop:40}}>
                                <Typography style={{marginTop:-40, color:"#fff",  fontWeight:600}}>Audio&nbsp;languages</Typography>
                                  <Typography style={{marginTop:20}}>English</Typography>
                                  <Typography>Hindi</Typography>
                                  <Typography>Telugu</Typography>
                                  <Typography>Tamil</Typography>
                                  <Typography>Kannada</Typography>
                                </Box>
                                <Box style={{width:"50%",  marginTop:40}}>
                                  <Typography>Malayalam</Typography>
                                  <Typography>Punjabi</Typography>
                                  <Typography>Marathi</Typography>
                                  <Typography>Bengali</Typography>
                                  <Typography>Gujarati</Typography>
                                </Box>
                            </Box>
                          </ListItem>
                        </Box>
                        <Box>
                          <ListItem>
                            <Box>
                                <Typography style={{color:"#fff", fontWeight:600}}>Other&nbsp;categories</Typography>
                            <Box style={{marginTop:20}}>
                                 <Typography>Drama</Typography>
                                  <Typography>Action and adventure</Typography>
                                  <Typography>Romance</Typography>
                                  <Typography>Comedy</Typography>
                                  <Typography>Suspense</Typography>
                                  <Typography>Horror</Typography>
                                  <Typography>Award winners</Typography>
                            </Box>
                          </Box>
                          </ListItem>
                        </Box> 
                    </Box>
                </Box>
            </List>
        </Box>
        )
    }
    return(
        <Box  className={classes.customLinks}>
        <Link to="/home" style={{textDecoration:"none"}}><Typography variant="h6" className={classes.links} style={{ fontSize: 17, fontWeight:400 }}>Home</Typography></Link>
        <Link to="/tv" style={{textDecoration:"none"}}><Typography variant="h6" className={classes.links} style={{display:"inline-block",   fontSize: 17, fontWeight:400 }}>TV&nbsp;Shows</Typography></Link>
        <Link to="/movies" style={{textDecoration:"none"}}><Typography variant="h6" className={classes.links} style={{ fontSize: 17, fontWeight:400 }}>Movies</Typography></Link>
        <Link to="/channels" style={{textDecoration:"none"}}><Typography variant="h6" className={classes.links} style={{ fontSize: 17, fontWeight:400 }}>Channels</Typography></Link>
        <Typography variant="h6" className={classes.links} style={{ fontSize: 17, fontWeight:400 }} onMouseEnter={handleOpen}  >Categories</Typography>
        <Drawer anchor={'top'} open={open} onClose={handleClose} onClick={handleClose}
          classes={{
            paper: classes.drawerPaper
           }}
           >
                {list()}
             </Drawer>
        </Box>
    )
}

export default HeaderButtons;