import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { FaPlusSquare, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import { className } from '../css/style.css'

class Menubar extends Component {

    handlerLogout = (event) => {
        event.preventDefault()
        try{
          localStorage.removeItem('dataAccount')
          this.props.history.push('/login')
          window.location.reload();
        }catch(err){
          console.log(err);
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className='menubar'>
                <Link to='#' className='menu-add'><FaPlusSquare size={22} /></Link><br/><br/>
                <Link to='#' className='menu-add'><FaChartLine size={22} /></Link><br/><br/>
                <Link onClick={(event) => {this.handlerLogout(event)}} className='menu-add'><FaSignOutAlt size={22} /></Link><br/><br/>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Menubar)