import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Link, Menu, MenuItem, makeStyles, Button} from '@material-ui/core';
import {AccountCircle, ExitToApp} from '@material-ui/icons';


const NavBar = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        localStorage.removeItem('user');
        localStorage.clear();
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
                        {localStorage.username}
                        
                        <IconButton
                        aria-haspopup="true"
                        onClick={handleClose}
                        color="inherit"
                        size="small"
                        >
                        <ExitToApp />
                        </IconButton>
                        
                        
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
    },
   
}));

export default NavBar;