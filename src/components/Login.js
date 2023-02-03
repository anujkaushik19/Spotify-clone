import React from 'react';
import classes from './Login.module.css'
import { LoginUrl } from './spotify';

function Login(){
    return <div className={classes.login}>
   <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  />
    <a href={LoginUrl}>Login With Spotify</a>
    </div>
}
export default Login;