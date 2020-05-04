import React, {Component} from 'react';
import './Landing.css';
import Auth from './Auth/Auth';


class Landing extends Component {
    constructor () {
        super();
        this.state = {
            auth: false
        }
        this.toggleAuth = this.toggleAuth.bind(this)
    }

toggleAuth() {
    let {auth} = this.state
    this.setState({auth: !auth})
}

    render () {
        return (
            <div className="landing-base">

                <div className="landing-main">

                    <h1>RΣMA</h1>

                    <p1>The roots of education are bitter, but the fruit is sweet - Aristotle</p1>

                    <button className='signin-register-button' onClick={this.toggleAuth} >SIGN IN / REGISTER</button> 
                    {this.state.auth && <Auth/>}
                    
                </div>

            </div>
        )
    }
} 

export default Landing;


