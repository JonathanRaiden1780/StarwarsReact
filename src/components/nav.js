import React, { useEffect, useState } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import fire from '../configfire';

const NavBar = (props) => {
    const firestore = fire.firestore();
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [blogs,setBlogs]=useState([])

    useEffect(() => {
        fetchBlogs();
      }, [])
      const fetchBlogs=async()=>{
        const response=firestore.collection('Registro').doc(localStorage.user.email);
        const data=await response.get();
        data.forEach(item=>{
        setBlogs([...blogs,item.data()])
    })
    }
    const getUser = async (email) => {
        try {

            const userreg = await firestore.collection('Registro').doc(email);
            const data =  userreg.get();
            const dafas =  (await data).data();
            console.log(dafas);
        } catch (error) {
            throw error;
        }
    }
    //const datauser = getUser(localStorage.user.email);
    console.log(blogs);
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    console.log(localStorage);
    const handleClose = () => {
        localStorage.removeItem('user');
        props.setUserState()
        ;
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.menubackgroud} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        StarWars APP
                    </Typography>
                    {auth && (
                    <div>
                        
                        <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                        >
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menubackgroud: {
        backgroundColor: 'black',
        opacity:'0.6'
    }, 
    title: {
        flexGrow: 1
    }
}));

export default NavBar;