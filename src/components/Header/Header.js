import React, { Component } from 'react'
import './Header'

class Header extends Component {
    render() {
        return (
            <div className="callout Headcolor" id="Header">
                <div className="row column">
                    <a href="/"><h1 id="tit">{this.props.name}</h1></a>
                </div>
            </div>
        )
    }
}

export default Header
