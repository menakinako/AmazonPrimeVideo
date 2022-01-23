import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeSlideDetails } from "../../redux/actions/homeAction";
import NavBar from '../NavBar';
import Footer from '../Footer';
import HRSlide from './HRSlide';
import {Box, Grid, makeStyles, Table, TableBody, TableCell, TableRow, Typography, Button} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import clsx from 'clsx';

const useStyle = makeStyles(theme=>({
    components :{
        marginTop: 55,
        background: "#0f171e"
    },
    container:{
        display: "flex",
        color:"#ffffff",
        [theme.breakpoints.down('md')]:{
            margin: 0,
        }
    },
    rightContainer:{
        marginTop: 50,
        marginLeft: 50,
        position:"relative",
        "&>*":{
            marginTop:10
        },
        [theme.breakpoints.down('md')]:{
            marginLeft: 10,
            fontSize:10
        }
    },
    smallText:{
        fontWeight:600,
        padding:0,
        verticalAlign: "baseline",
        "&>*":{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyText:{
        color: "#8197a4",
        fontSize:20,
        [theme.breakpoints.down('md')]:{
            fontSize:7
        }
    },
    button:{
      backgroundColor: "#0F79AF !important",
      backgroundImage: "linear-gradient(to top,#0F79AF,#0F79AF)",
      color: "#fff",
      height: 65,
      width: 140,
      textTransform: "none",
      fontSize: 17,
      fontWeight: 700,
      [theme.breakpoints.down('md')]:{
        width:240
    }
    },
    buttonContainer:{
      display: "table",
      padding:"16px 18px 16px 18px",
      minWidth: 280,
      fontSize: 17,
      borderRadius: 2,
      marginLeft:-17
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
    marginLeft:10
    },
    icon:{
        boxSizing:"border-box",
        display:"inline-block",
        background:"#425265",
        borderRadius:"50%",
        marginLeft: 10,
        padding:"5px, 15px",
        width: 45,
        height: 45
    },
    options:{
        "& > *":{
        [theme.breakpoints.down('sm')]: {
            display:"flex",
           },
        }
    },
    share:{
        [theme.breakpoints.down('sm')]: {
            display:"none",
            marginLeft:0,
           },
           [theme.breakpoints.between('sm', 'md')]:{
            marginRight:100,
         }
    }, 
    description:{
        fontSize:20,
        [theme.breakpoints.down('sm')]: {
            fontSize:13
           }
    }
}))


// match gives access to the param where we can retrieve the id
const HDetailView=({match})=>{

    const classes = useStyle();

    const { homeslide } = useSelector(state=> state.getHomeSlideDetails);

    const dispatch = useDispatch();
       
    useEffect(()=>{
         dispatch(getHomeSlideDetails(match.params.id));
    }, [dispatch])

    return(
        <Box style={{background:"#0f171e"}}>
            <NavBar />
         <Box className={classes.components}>
           {homeslide && Object.keys(homeslide).length &&
              <Grid container className={classes.container} style={{backgroundRepeat:"no-repeat", backgroundSize:"cover",background: `linear-gradient(to right, #0f171e 40%, transparent 98%), linear-gradient(to top, #0f171e 2%, transparent 18%), url(${homeslide.detailUrl})`, opacity:1}}>
                 <Grid items lg={6} md={6} sm={8} xs={12} className={classes.rightContainer}>
                   <Typography variant="h4">{homeslide.title}</Typography>
                   <Typography className={clsx(classes.smallText, classes.greyText)}><span className={classes.box} style={{marginLeft:-1, marginRight:5}}>IMDb</span>8.7 2h 18 min 2021 <span className={classes.box}>X-Ray</span><span className={classes.box}>UHD</span><span className={classes.box}>U/A 13+</span>
                   <span ><ChatOutlinedIcon style={{marginLeft:10,marginBottom:-10}}/></span></Typography>
                   <Box className={classes.buttonContainer}>
                     <Button variant="contained" className={classes.button}><PlayArrowIcon style={{width:50, height:50}}/>Play</Button>
                     <span className={classes.icon}><PlayArrowOutlinedIcon style={{width: 44, height:30, textAlign:"center", marginTop: 5}}/></span>
                     <span className={classes.icon}><AddIcon style={{width: 44, height:30, textAlign:"center", marginTop: 5}}/></span>
                     <span className={classes.icon}><CelebrationOutlinedIcon style={{width: 44, height:30, textAlign:"center", marginTop: 5}}/></span>
                     <span className={classes.icon}><FileDownloadOutlinedIcon style={{width: 44, height:30, textAlign:"center", marginTop: 5}}/></span>
                    </Box>
                   <Typography className={classes.description}>{homeslide.description}</Typography>
                   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                       <TableBody>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyText}><Typography >Director</Typography></TableCell>
                               <TableCell style={{ fontWeight: 600, color:"#79b8f3" }}>{homeslide.director}</TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyText}><Typography >Starring</Typography></TableCell>
                               <TableCell style={{ fontWeight: 600, color:"#79b8f3" }}>{homeslide.starring}</TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyText}><Typography >Genres</Typography></TableCell>
                               <TableCell style={{ fontWeight: 600, color:"#79b8f3" }}>{homeslide.genres}</TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                               <TableCell className={classes.greyText}><Typography >Subtitles</Typography></TableCell>
                               <TableCell style={{ fontWeight: 600, color:"#79b8f3" }}>{homeslide.subTitlte}</TableCell>
                           </TableRow>
                           <TableRow className={classes.smallText}>
                             <TableCell className={classes.greyText}><Typography >Audio Languages</Typography></TableCell>
                             <TableCell style={{ fontWeight: 600, color:"#79b8f3" }}s>{homeslide.audioLanguages}</TableCell>
                          </TableRow>
                       </TableBody>
                   </Table>
                 </Grid>
                 <Box style={{display:"flex", flexDirection:"row"}} className={classes.options}>
                       <Box style={{width:"80%"}} className={classes.options}>
                       <Typography style={{marginTop: 70, marginLeft: 50,  color: "#8197a4"}}>By clicking play, you agree to our <span style={{color:"#79b8f3"}}>Terms of Use</span></Typography>
                       </Box>
                       <Box style={{width:"20%", marginLeft:500}} className={classes.share}>
                       <Typography style={{marginTop: 70, display:"flex"}}>
                           <span style={{display:"flex", marginRight: 20}}><ShareOutlinedIcon style={{width: 26, height:26,color:"#8197a4", marginRight: 5}}/>Share</span>
                           <span style={{display:"flex", marginRight: 20}}><EditOutlinedIcon style={{width: 26, height:26,color:"#8197a4", marginRight: 5}}/>FeedBack</span>
                           <span style={{display:"flex", marginRight: 20}}><HelpOutlineOutlinedIcon style={{width: 26, height:26,color:"#8197a4", marginRight: 5}}/>Help</span>
                       </Typography>
                       </Box>
                   </Box>
               </Grid> 
           } 
         <Typography style={{textAlign:"center", color:"#ffffff", fontSize:19, marginTop: 100, fontWeight: 600}}>Related <span style={{marginLeft:10, color:"#8197a4"}}>Detail</span></Typography>
        <HRSlide />
        <Typography style={{marginTop: 150}}></Typography>
        </Box>
        <Footer />
       </Box>
    )
}
export default HDetailView;