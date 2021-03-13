import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="row" id="Body">
                <div className="medium-12 columns">
                    <h2 id="welcomeText">PHP, MySQL and ReactJS Authentication App</h2>
                    <a href="/login" className="button">LOGIN</a>
                    <a href="/signup" className="button success">SIGN UP</a>
                </div>
            </div>
        )
    }
}

export default Welcome
