import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import settingsIcon from './Media/settingsIcon.png';
import './MainWindow.css';

class Home extends Component{
    state = {
        buttonText: "Instalar"
    }
    
    render(){
        return(
            <div className="MainWindow">
                <div className="header">
                    <Link className="link" to={'/Settings'}>
                        <button className="settingsButton">
                            <img className="settingsIcon" src={settingsIcon}></img>
                        </button>
                    </Link>
                    <h1>Virgolauncher</h1>
                </div>
                <div className="news">
                    <h2>Novedades</h2>
                </div>
                <div className="footer">
                    <button className="installButton">{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default Home;