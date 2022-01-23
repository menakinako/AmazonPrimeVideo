import { Box } from "@mui/material"
import { makeStyles,  InputBase, List, ListItem } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getHomeSlides as listHomeSlides} from '../../redux/actions/homeAction'
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    search: {
        border: "0.1px solid #8d969b86",
        width: '280px',
        height: 40,
        display: 'flex',
        backgroundColor:"rtransparent",
        [theme.breakpoints.down('sm')]:{
          border: 0, 
          width:"100px",
          marginLeft:"-10px"
       },
       [theme.breakpoints.between('sm', 'md')]:{
        width:"180px"
     }
      },
      searchIcon: {
        marginRight: 'auto',
        padding: 5,
        display: 'flex',
        color: '#a9b4b9fd',
        [theme.breakpoints.down('sm')]:{
          width:30
       }
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
        
      },
      inputInput: {
        width: '100%',
        color: 'rgba(242,244,246,.9)',
        fontSize:19,
        fontWeight:400,
        [theme.breakpoints.down('sm')]:{
          fontSize:10
       },
       
       [theme.breakpoints.between('sm', 'md')]:{
        fontSize:15,
     }
    },
    list: {
      position: 'absolute',
      color: '#FFFFFF',
      backgroundColor: '#0f171e',
      marginTop: 46,
      width:280
    }
}))



const Search =()=>{
    const classes = useStyle();
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

  const getHomeSlides = useSelector(state => state.getHomeSlides);
  const { homeslides } = getHomeSlides;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listHomeSlides())
  }, [dispatch])

    return(
        <Box className={classes.search}>
         <div className={classes.searchIcon}>
            <SearchIcon/>
          </div>
           <InputBase
            placeholder="Search"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => getText(e.target.value)}
          />
          {
            text && 
            <List className={classes.list} hidden={open}>
              {
                homeslides.filter(homeslide => homeslide.title.toLowerCase().includes(text.toLowerCase())).map(homeslide => (
                  <ListItem>
                    <Link 
                      to={`/homeslide/${homeslide.id}`} 
                      style={{ textDecoration:'none', color:'inherit'}}
                      onClick={() => setOpen(true)}  
                    >
                      {homeslide.title}
                    </Link>
                  </ListItem>
                ))
              }  
            </List>
          }
        </Box>
    )
}

export default Search;