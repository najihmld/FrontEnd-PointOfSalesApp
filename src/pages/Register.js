import React from 'react';
import axios from 'axios';
import qs from 'qs';
import className from '../css/style.css'
import {withRouter, Link, Redirect } from 'react-router-dom'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleName = (event) => {
        let localName = event.target.value
        this.setState({
            name: localName
        })
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

    handleSignup = (event) => {
        event.preventDefault()
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.name
        }
        if(this.state.name === '' || this.state.email === '' || this.state.password === '') {
            alert('All requirement must be filled!')
        } else{
            const body = qs.stringify(data)
            axios.post('http://127.0.0.1:3001/auth/register', body)
            .then(res => {
                if(res.status === 200) {
                    try{
                        alert('Registration Success')
                        localStorage.setItem('dataSignup', JSON.stringify(res.data.data))
                        this.props.history.push('/login')
                    } catch(err) {

                    }
                }
            })
            .catch(err => {

            })
        }
    }

    render(){
        return(
            <React.Fragment>          
        <div className="login-page">
        <div className="form">
            <form className="login-form">
            <input type='text' placeholder='name' onChange={(event) => this.handleName(event)} />
            <input type='text' placeholder='email' onChange={(event) => this.handleEmail(event)} />
            <input type='password' placeholder='password' onChange={(event) => this.handlePassword(event)} />
            <button onClick={(event) => this.handleSignup(event)} type='submit'>Sign Up</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
            </form>
        </div>
        </div>
        </React.Fragment> 
        )
    }
   
}

export default withRouter(Register)







