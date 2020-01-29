import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import { className } from '../css/style.css'


class NavHeader extends Component {

    render() {
        return(
            <div className='navbar'>
                <div className='brand'>Pikaco Coffe</div>
                <Link to='#' className='menu'><FaBars size={22} /></Link> 
            </div>
        )
    }
}

export default withRouter(NavHeader)