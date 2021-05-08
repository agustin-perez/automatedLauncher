import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import backIcon from './Media/backArrow.png';
import './Settings.css';

class Settings extends Component{
    
    render(){
        return(
            <div className="MainWindow">
                <Link className="link" to={'/'}>
                    <button className="backButton">
                        <img className="backIcon" src={backIcon}></img>
                    </button>
                </Link>
            </div>
        )
    }
}

export default Settings;