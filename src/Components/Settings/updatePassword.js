import React, {Component} from 'react';
import './updatePassword.css';
import {connect} from 'react-redux';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Password extends Component {
    constructor() {
        super();
        this.state = {
            newPassword: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.setState({
            newPassword: e.target.value
        })
    }

    updatePassword(newPassword) {
        axios.put(`/auth/update_password`, {
            password: newPassword
        }).then(() => console.log('Password updated!'))
    }

    render () {
        return (

            
            <div className='update-main'>
            
            <Header/>

            <div className='update-password-container'> 

                <input
                className='new-password-input'
                type='text'
                placeholder='New Password'
                name='newPassword'
                value={this.state.newPassword}
                onChange={(e) => this.changeHandler(e)}
                />

                <button className='update-password-button' onClick = {() => this.updatePassword(this.state.newPassword)}>Update Password</button> 
                  
            
            </div>

            <Footer/>

            </div>
        )
    }
}

export default Password;