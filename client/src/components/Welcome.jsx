import React from "react";
import { Box } from "@material-ui/core"
import Jumbotron from './Jumbotron'
import Banner from './Banner'
import NavBar from './NavBar'
import Footer from './Footer';


const Welcome =() =>{
    return(
        <Box>
          <NavBar />
          <Banner />
          <Jumbotron/>
          <Footer />
        </Box>
    )
}

export default Welcome;