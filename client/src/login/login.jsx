import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {Box, Dialog, Button, DialogContent, TextField, Typography} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import logo from '../images/logon.png';

import {authenticateSignup, authenticateLogin} from '../service/api'

const useStyle= makeStyles(theme=>({
    component:{
        height: "100vh",
        width:"70vh",
        color:"#ffffff",
        [theme.breakpoints.down('sm')]:{
          width:"40vh"
      },
      [theme.breakpoints.between('sm', 'md')]:{
        height:"80vh",
     }
    },
    login:{
            padding: '15px 25px',
            display :" flex",
            flex: 1,
            flexDirection: 'column',
            justifyContent:"space-between",
            "& > *":{
                padding: '15px 0px',
                marginTop: 10
            },
            [theme.breakpoints.down('sm')]:{
              padding: '7px 10px',
              width:"180px",
              marginLeft: 5
          },
          [theme.breakpoints.between('sm', 'md')]:{
            padding: '35px 10px',
            width:"320px",
            marginLeft: 20
         }
    },
    labels:{
        color:"#ffffff"
    },
    greyText:{
        color: "#878787",
        textAlign:"center"
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#0F79AF !important'
      },
      text:{
        color:"#000000"
      },
      logo:{
        width:150,
        height: 120,
        marginLeft: 110,
        marginTop: -50,
        [theme.breakpoints.down('sm')]:{
          marginLeft: 20,
      },
      [theme.breakpoints.between('sm', 'md')]:{
        marginLeft:90
     }
      }
    
}))

const initialValue = {
  login:{
     view: "login",
  },
  signup:{
      view: "signup",
  }
}

const signupinitialValue ={
  fullname:"",
  username:"",
  email:"",
  password:""
}

const logininitialvalue ={
  username:"",
  password:""
}



const Login =({loginOpen, setLoginOpen, setAccount})=>{
    const classes = useStyle();
    const [view, setView] =useState(initialValue.login);
    const [signup, setSignup] = useState(signupinitialValue);
    const [login, setLogin] = useState(logininitialvalue);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory()

    const handleClose = () =>{
      setLoginOpen(false);
      setView(initialValue.login)
     } 

     const toggleButton=()=>{
       setView(initialValue.signup)
     }
     const change=()=>{
      setView(initialValue.login)
    }
    const signupUser =async()=>{
           let response = await authenticateSignup(signup);
           if(!response) return;
           handleClose();
           setAccount(signup.username);
           history.push('/browser',{params:signup.username})
       }

       const loginUser= async()=>{
        let response = await authenticateLogin(login);
        if(!response){
            setError(true);
            return;
        } 
        handleClose();
        setAccount(login.username);
        history.push('/browser',{params:login.username})
      }
      const onInputChange =(e)=>{
        setSignup({...signup, [e.target.name]: e.target.value});
        if(e.target.name==='username'){
          setValue(e.target.value);
        }
    }

    const onValueChange =(e)=>{
        setLogin({...login, [e.target.name]: e.target.value});
        if(e.target.name==='username'){
          setValue(e.target.value);
        }
    }

    return(
        <Dialog open={loginOpen}>
        <DialogContent className={classes.component}>
          <img className={classes.logo} src={logo}/>
          {view.view==='login'?
          <Box className={classes.login}>
            <Typography variant="h5" style={{textAlign: "center",color:"#0F79AF", marginTop:-70}}>Sign In</Typography>
              <TextField name="username" onChange={(e)=> onValueChange(e)} label="Enter your Username" 
              InputLabelProps={{
                style: {
                  color: '#0F79AF'
                } }}
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric"
                  }}
                />
              <TextField name="password" onChange={(e)=> onValueChange(e)} label="Enter your Password" 
              InputLabelProps={{
                style: {
                  color: '#0F79AF',
                } }}
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric"
                  }}
            
                style={{marginTop: 10, borderColor:"#0F79AF"}}/>
              <Typography variant="subtitle2" className={classes.text} style={{marginTop:-10}}>By continuing, you agree to Amazon's <span style={{color:"#0F79AF"}}>Conditions of Use</span> and <span style={{color:"#0F79AF"}}>Privacy Notice</span>.</Typography>
              <Button variant="contained" onClick={()=>loginUser()}>Sign-In</Button>
              <Typography className={classes.greyText}>New to Amazon?</Typography>
              <Button variant="contained" onClick={()=>toggleButton()}>Create an account</Button>
          </Box>:
          <Box className={classes.login}>
            <Typography variant="h5" style={{textAlign: "center",color:"#0F79AF", marginTop:-75}}>Create Account</Typography>
             <TextField name="fullname" onChange={(e)=> onInputChange(e)} label="Enter your Name" 
              InputLabelProps={{
                style: {
                  color: '#0F79AF'
                } }}
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric"
                  }}
                />
                 <TextField name="username" onChange={(e)=> onInputChange(e)} label="Enter your Username" 
              InputLabelProps={{
                style: {
                  color: '#0F79AF'
                } }}
                InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric"
                  }}
                  style={{marginTop: 10, borderColor:"#0F79AF"}}
                />
          <TextField name="email" onChange={(e)=> onInputChange(e)}  label="Enter your Email" 
          InputLabelProps={{
            style: {
              color: '#0F79AF'
            } }}
            InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric"
              }}
              style={{marginTop: 10, borderColor:"#0F79AF"}}
            />
          <TextField name="password" onChange={(e)=> onInputChange(e)} label="Enter your Password(Atleast 6 characters)" 
          InputLabelProps={{
            style: {
              color: '#0F79AF',
            } }}
            InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric"
              }}
        
            style={{marginTop: 10, borderColor:"#0F79AF"}}/>
          <Typography variant="subtitle2" className={classes.text} style={{marginTop:-10}}>By continuing, you agree to Amazon's <span style={{color:"#0F79AF"}}>Conditions of Use</span> and <span style={{color:"#0F79AF"}}>Privacy Notice</span>.</Typography>
          <Button variant="contained" onClick={()=>signupUser()}>Create Account</Button>
          <Typography className={classes.greyText}>Already have an account? <span style={{color:"#0F79AF", cursor: "pointer"}} onClick={()=>{change()}}>Sign In</span></Typography>
      </Box>
    }
        </DialogContent>
      </Dialog>
    )
}

export default Login;