import React, { useEffect, useState } from 'react';
import {
    Container, CssBaseline, Avatar, Typography,
    Button, Grid, Link, makeStyles, Card, CardContent
} from '@material-ui/core';
import { LockRounded } from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import fire from '../configfire';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Register from '../models/register'

const firestore = fire.firestore();

const SignUp = (props) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const addUser = async () => {
        try {
            await firestore.collection('Registro').doc(email).set({
                email: email,
                name: name,
                name: username,
            });
        }
        catch (error) {
            throw error;
        }
    }
    const getUser = async (email) => {
        try {
            const userreg = await firestore.collection('Registro').doc(email);
            const data = await userreg.get();
            return data.data();
        } catch (error) {
            throw error;
        }
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassowerd = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleSignUp = () => {

        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                if (response) {
                    props.toggle();
                    toast.success('User Registered Successfully');
                }
            }).catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error(error.message);
                        break;
                    case 'auth/invalid-email':
                        toast.error(error.message);
                        break;
                    case 'auth/weak-password':
                        toast.error(error.message);
                        break;
                }
            });
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== password) {
                return false;
            }
            return true;
        });
        return () => {
            ValidatorForm.removeValidationRule('isPasswordMatch');
        }
    }, [password])
    return (
        <Container component="main" maxWidth="xs">
            <Card className={classes.card}>
                <CardContent>
                    <ToastContainer />
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockRounded />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <ValidatorForm
                            onSubmit={handleSignUp}
                            className={classes.form}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                onChange={handleEmail}
                                name="email"
                                value={email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                                autoComplete='off'
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Name"
                                onChange={handleName}
                                name="Name"
                                value={name}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Username"
                                onChange={handleUsername}
                                name="Username"
                                value={username}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                fullWidth
                                label="Password"
                                onChange={handlePassword}
                                name="password"
                                type="password"
                                value={password}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete="off"
                            />
                            <br />
                            <TextValidator
                                variant="outlined"
                                label="Confirm password"
                                fullWidth
                                onChange={handleConfirmPassowerd}
                                name="confirmPassword"
                                type="password"
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['password mismatch', 'this field is required']}
                                value={confirmPassword}
                                autoComplete="off"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link onClick={props.toggle} className={classes.pointer} variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        backgroundColor: ' #ffe81c',
        margin: theme.spacing(3, 0, 2),
        color: '#050628'
    },
    card: {
        marginTop: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
    },
    pointer: {
        cursor: 'pointer',
        color: 'red'
    }
}))
export default SignUp;