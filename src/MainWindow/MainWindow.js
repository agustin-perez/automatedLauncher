import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainWindow.css';
import settingsIcon from './Media/settingsIcon.png';
import News from './Components/News/News';
import MenuBar from './Components/MenuBar/MenuBar';

class Home extends Component{
    state = {
        buttonText: "Instalar"
    }
    
    render(){
        return(
            <div className="mainWindow">
                <div className="header">
                    <Link className="link" to={'/Settings'}>
                        <button className="settingsButton">
                            <img className="settingsIcon" src={settingsIcon}></img>
                        </button>
                    </Link>
                    <h1>Virgolauncher</h1>
                </div>
                <div className="dynamicWrapper">
                    <div className="news">
                        <h2>Novedades</h2>
                        <News/>
                    </div>
                    <div className="menu">
                        <MenuBar/>
                    </div>
                </div>
                <div className="footer">
                    <button className="installButton">{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default Home;