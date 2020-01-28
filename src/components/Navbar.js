import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import { className } from '../css/style.css'

class NavHeader extends Component {

    state = {

    }

    componentDidMount() {

    }

    toggleNavbar = () => {

    }

    handlerLogout = (event) => {

    }

    render() {
        return(
            <div className='navbar'>
                {/* <Link to='#' className='menu-search'><FaSearch size={22} /></Link>  */}
                <div className='brand'>Pikaco Coffe</div>
                <Link to='#' className='menu'><FaBars size={22} /></Link> 
          
            </div>
        )
    }
}

export default withRouter(NavHeader)