import React from 'react';
import axios from 'axios';
import qs from 'qs';
import className from '../css/style.css'
import {withRouter, Link, Redirect } from 'react-router-dom'

export default class Login extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmail = (event) => {
        let localEmail = event.target.value
        this.setState({
            email: localEmail
        })
    }

    handlePassword = (event) => {
        let localPassword = event.target.value
        this.setState({
            password: localPassword
        })
    }

    handleSubmitLogin = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        if(this.state.email === '' && this.state.password === '') {
            alert("Username and password can't be empty")
        } else{
            const body = qs.stringify(data)
            axios.post('http://127.0.0.1:3001/auth/login', body)
            .then(res => {
                // console.log(res);
                if(res.status === 200) {
                    try{
                        localStorage.setItem('dataAccount', JSON.stringify(res.data.data))
                        this.props.history.push('./')
                        window.location.reload();
                    } catch(err) {
                        console.log(err)
                    }
                } else{
                    alert("Error")
                }
                
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
 
    render() {
        return(
         <React.Fragment>          
        <div className="login-page">
        <div className="form">
            <form className="login-form">
            <input type='text' placeholder='email' onChange={(event) => this.handleEmail(event)} />
            <input type='password' placeholder='password' onChange={(event) => this.handlePassword(event)} />
            <button onClick={(event) => this.handleSubmitLogin(event)} type='submit'>Login</button>
            <p className="message">Not registered? <a href="http://127.0.0.1/register">Create an account</a></p>
            </form>
        </div>
        </div>
        </React.Fragment> 

        )
    }
}