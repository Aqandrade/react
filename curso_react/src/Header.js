import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="#" className="brand-logo">Livros Tops</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;