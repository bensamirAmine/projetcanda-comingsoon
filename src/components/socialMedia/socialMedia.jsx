import React, { Component } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

class SocialMedia extends Component {
    state = {  } 
    render() { 
        return (
            <div className="socialMediaContainer">
               <div>
               <div className="socialMediaBtnContainer">
                    <FaFacebookF color={'white'} size={20} />
                </div>
               <div className="socialMediaBtnContainer">
                    <FaTwitter color={'white'} size={20} />
                </div>
               <div className="socialMediaBtnContainer">
                    <FaInstagram color={'white'} size={20} />
                </div>
             
                
               </div>
            </div>

        );
    }
}

export default SocialMedia;