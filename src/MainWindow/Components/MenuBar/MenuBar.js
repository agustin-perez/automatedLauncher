import React, { Component } from 'react';
import './MenuBar.css';

class MenuBar extends Component{
    
    render(){
        return(
            <div className="menuBar">
                <button className="menuButton">Comprobar archivos locales</button>
                <button className="menuButton">Desinstalar</button>
                <button className="menuButton">Acerca de</button>
            </div>
        )
    }
}

export default MenuBar;