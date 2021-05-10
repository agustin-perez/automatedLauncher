import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainWindow.css';
import settingsIcon from './Media/settingsIcon.png';
import News from './Components/News/News';
import MenuBar from './Components/MenuBar/MenuBar';
const { ipcRenderer } = window.require('electron');

const minecraftStarter = async (opts, authKeypair) => {
    const res = await ipcRenderer.send('request-minecraft-launch', opts, authKeypair);
    return res;
}

class Home extends Component{
    state = {
        buttonText: "Instalar",
        opts: {
            gamePath: "C:/Users/Agustín Pérez/AppData/Roaming/.minecraft",
            javaPath: "C:\Program Files\Java\jre1.8.0_291",
            version: "1.12.2",
        },
        authKeypair: {
            username: 'test',
            password: 'test'
        }
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
                   <button className="installButton" onClick={()=> {minecraftStarter(this.state.opts, this.state.authKeypair)}}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default Home;