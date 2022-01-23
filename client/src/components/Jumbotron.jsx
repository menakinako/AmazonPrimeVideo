import React, { useState } from 'react';
import {data, columndata, nextdata,prevdata} from '../fixtures/jumbo';
import { makeStyles, Button, Grid, Box } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles(theme=>({
    container:{
       display: "flex",
       alignItems: "center",
       justifyContent:"space-between",
       maxWidth: "1410px",
       width: "100%",
       backgroundColor: "#000000",
       color: "#ffffff",
       [theme.breakpoints.down('sm')]:{
          display:"table",
          maxWidth: "1310px",
     }
    },
    pane:{
        width: "50%",
        [theme.breakpoints.down('sm')]:{
          width:"100%"
        }
    },
    title:{
      fontSize: "2.8rem",
      lineHeight: 1.1,
      marginBottom: "8px",
      textAlign:"left",
      marginLeft: 70,
      fontWeight: 400,
      [theme.breakpoints.down('sm')]:{
        marginLeft: 0,
        fontSize: "1.8rem",
        textAlign:"center",
      },
      [theme.breakpoints.between('md', 'lg')]:{
        marginTop:50,
       }
    },
    subTitle:{
       fontSize: "1.5rem",
       fontWeight: 200,
       lineHeight: 1.3,
       textAlign:"left",
       marginLeft: 70,
       marginTop: 24,
       [theme.breakpoints.down('sm')]:{
        marginLeft: 0,
        fontSize: "1.0rem",
        textAlign:"center",
        fontWeight:100
      },
      [theme.breakpoints.between('md', 'lg')]:{
        fontSize:"1.3rem",
        fontWeight:100
       }
    },
    image:{
       maxWidth: "100%",
       height: "auto",
       [theme.breakpoints.down('sm')]:{
        display:"none"
      }
    },
    jumbo:{
        display: "flex",
        flexDirection:"column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: "30px",
        [theme.breakpoints.down('sm')]:{
          margin:"0px"
       }
    },
    jumboContainer:{
        display:"flex",
        [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
        display:"block"
     }
    },
    jumboTitle:{
      fontSize:36,
      lineHeight:1.3,
      padding:"8px 0",
      fontWeight: 500,
      textAlign:"center",
      [theme.breakpoints.down('sm')]:{
        fontSize:25
     }
    },
    jumbosubTitle:{
      fontSize:21,
      lineHeight: "20px",
      paddingBottom:"30px",
      fontWeight: 400,
      textAlign:"center",
      [theme.breakpoints.down('sm')]:{
        fontSize:15
     }
    },
    jumboImage:{
      [theme.breakpoints.down('sm')]:{
        width:"100%",
        height: 190
     }
    },
    button:{
      backgroundColor: "#0F79AF !important",
      backgroundImage: "linear-gradient(to top,#0F79AF,#0F79AF)",
      color: "#fff",
      height: 55,
      width: 320,
      textTransform: "none",
      fontSize: 19,
      fontWeight: 700,
      [theme.breakpoints.down('sm')]:{
        width:"100%",
        fontWeight: 100,
        marginLeft:-30,
        marginBottom:20
      },
      [theme.breakpoints.between('sm', 'md')]:{
       marginLeft: 170
     },
     [theme.breakpoints.between('md', 'lg')]:{
      marginLeft: 30,
      marginBottom:20
     }
    },
    buttonContainer:{
      display: "table",
      margin: "38px auto 0 50px",
      padding:"16px 18px 16px 18px",
      minWidth: 280,
      fontSize: 17,
      borderRadius: 2
    },
    gridImage:{
      maxWidth: 256,
      width: 200,
      [theme.breakpoints.down('sm')]:{
        width:100,
   },
   [theme.breakpoints.between('sm', 'md')]:{
    width: 170
 }
    },
    grid:{
      [theme.breakpoints.down('sm')]:{
       marginTop:150
      },
      [theme.breakpoints.between('md', 'lg')]:{
        marginTop:140
    }
    },
    imageBlock:{
      display:"none",
      [theme.breakpoints.down('sm')]:{
        width:"100%",
        display:"block",
        height: 170
      },
      [theme.breakpoints.between('sm', 'md')]:{
        height: 250,
        width:"100vw"
     }
    }
}))


const Jumbotron =()=>{
    const classes = useStyles();
    const [value, setValue] = useState('hello');
    
     return(
         <div>
           {
               prevdata.map((item)=>(
                   <div key={item.id} className={classes.container} style={{flexDirection: item.direction, backgroundColor:"#ffffff", color:"#000000"}}>
                   <div className={clsx(classes.pane, classes.grid)} >
                      <div className={classes.title} style={{marginTop: -140}}>{item.title}</div>
                      <div className={classes.subTitle} style={{marginTop: 35}}>{item.subTitle}</div>
                   </div>
                   <div className={classes.pane}>
                     <Box sx={{ width: '100%' }} style={{ paddingTop: 20}}>
                      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                           <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" className={classes.gridImage} />
                       </Grid>
                       <Grid item xs={4}>
                          <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg" className={classes.gridImage}/>
                       </Grid>
                      <Grid item xs={4}>
                      <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg" className={classes.gridImage}/>
                       </Grid>
                      <Grid item xs={4}>
                      <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg" className={classes.gridImage}/>
                      </Grid>
                       <Grid item xs={4}>
                       <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg" className={classes.gridImage}/>
                       </Grid>
                       <Grid item xs={4}>
                       <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg" className={classes.gridImage}/>
                       </Grid>
                       <Grid item xs={4}>
                       <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg" className={classes.gridImage}/>
                      </Grid>
                       <Grid item xs={4}>
                       <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg" className={classes.gridImage}/>
                       </Grid>
                     </Grid>
                  </Box>
                   </div>
                   </div>
               ))
           }
           {
               data.map((item)=>(
                   <div key={item.id} className={classes.container} style={{flexDirection: item.direction}}>
                   <div className={classes.pane}>
                      <img src={item.image} className={classes.imageBlock}/>
                      <div className={classes.title}>{item.title}</div>
                      <div className={classes.subTitle}>{item.subTitle}</div>
                      <div className={classes.buttonContainer}>
                       <Button variant="contained" className={classes.button}>Get Started</Button>
                      </div>
                   </div>
                   <div className={classes.pane}>
                     <img src={item.image} className={classes.image}/>
                   </div>
                   </div>
               ))
           }
            <div className={classes.jumboContainer}>
           {
               columndata.map((item)=>(
                   <div key={item.id} className={classes.jumbo}>
                     <div >
                      <div className={classes.jumboTitle}>{item.title}</div>
                      <div className={classes.jumbosubTitle}>{item.subTitle}</div>
                    </div>
                    <div >
                      <img src={item.image} style={{maxWidth:"100%",verticalAlign:"top", paddingBottom:"30px"}} className={classes.jumboImage}/>
                    </div>
                   </div> 
               ))
           }
            </div>
           {
               nextdata.map((item)=>(
                   <div key={item.id} className={classes.container} style={{flexDirection: item.direction}}>
                   <div className={classes.pane}>
                      <img src={item.image} className={classes.imageBlock}/>
                      <div className={classes.title}>{item.title}</div>
                      <div className={classes.subTitle}>{item.subTitle}</div>
                       <div className={classes.buttonContainer}>
                       <Button variant="contained" className={classes.button}>Get Started</Button>
                      </div>
                   </div>
                   <div className={classes.pane}>
                     <img src={item.image} className={classes.image}/>
                   </div>
                   </div>
               ))
           }
         </div>
     )
}

export default Jumbotron;