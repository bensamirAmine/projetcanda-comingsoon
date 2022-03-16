import React, { Component } from 'react';
import Axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function SubscribeButton () {
    const [email,setEmail] = React.useState(''); 
    const [open,setOpen] = React.useState(false); 
    const addToList = ()=> {
        Axios.post('http://localhost:3001/add',{email: email})
        setOpen(true)
    }
        return (
            <>
           <div className="snack-container">
           <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={()=>setOpen(false)}
            
            >
                <Alert onClose={()=> setOpen(false)} severity="success" >
                Thank you fro subscription, you will be notified when we are online !
                </Alert>
            </Snackbar>
           </div>
        <div id="subscription_area">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <div className="subscribe_now">
                <h6>Get notified when we are online !</h6>
                <form className="subscribe_form">
                    <div className="input-group">
                    <input type="text" className="form-control" name="email" onChange={(event) => {
                        setEmail(event.target.value);
                        }} placeholder="Enter your email"/>
                    <span className="input-group-btn">
                            <button className="btn btn-default" onClick={addToList} type="button">subscribe</button>
                    </span>
                    </div>
                </form>
                </div>
            </div>
            </div>

        </div>
        </div>
        </>
        );
    
}

export default SubscribeButton;