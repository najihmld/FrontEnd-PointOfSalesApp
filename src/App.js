import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Navbar from './components/NavBar'
import Login from './pages/Login'
import Main from './pages/Main'
import Register from './pages/Register'


export default class App extends React.Component {
  
  state = {
    isLogin: true
  }

  componentDidMount() {
    // const data = localStorage.getItem('dataAccount')
    // console.log(data);
    // this.props.history.push('/home')
    const data = JSON.parse(localStorage.getItem('dataAccount'))
    if(!data){
    this.setState({isLogin: false})
    }
  }



  render() {
    return(
      <BrowserRouter>
      {this.state.isLogin &&  <Main {...this.props} />}
      <Switch>
          {/* <Route path='/' exact render={(props) => (<Main{...props}/>)} /> */}
          <Route path='/register' render={(props) => (<Register{...props}/>)} />
          <Route path='/login' render={(props) => (<Login{...props}/>)} />
      </Switch>
      </BrowserRouter>
    )
  }


}

