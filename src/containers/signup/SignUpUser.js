import React from 'react';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';



const SignUpUser=()=>{

    const paperStyle={padding :20,height:'620px',width:'400px', margin:"20px "}
    const avatarStyle={backgroundColor: '#2ab5b5'}
    const gridStyle={padding: 20}
    const buttonStyle={backgroundColor: '#2ab5b5', margin: '8px 0'}
     
    return(
        <Grid style={gridStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h1>User Sign Up</h1>
                </Grid>
                <Grid container spacing={2}> 
                    <Grid item xs={12}>
                        <TextField id="fullName" variant="outlined" label="Full Name" placeholder="Enter Your Full Name" fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField id="mobile" variant="outlined" label="Mobile Number" placeholder="Enter Your Mobile Number" fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField id="email" variant="outlined" label="Email" placeholder="Enter Your Email" fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField id="password" variant="outlined" label="Password" placeholder="Enter Password" type='password' fullWidth required/>
                    </Grid>

                    <Grid item xs={12}> 
                        <TextField id="confirmPassword" variant="outlined" label="Confirm Password" placeholder="Re Enter Your Password" type='password' fullWidth required/>
                    </Grid>
                </Grid>

                <Grid item xs={12}> 
                    <FormControlLabel  
                        control={
                            <Checkbox 
                            name="checkedB"
                            color="Primary"
                            />
                        }
                        label="I agree to the Terms and Conditions"
                    />
                </Grid>
                
                <Button type='submit' variant="contained" style={buttonStyle} href="#" fullWidth>Sign Up</Button>

                <Grid container justify="center">
                    <Grid item> 
                        <Typography>Already have an account? 
                            <Link href="/Signin/">
                                Sign In
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
}

export default SignUpUser