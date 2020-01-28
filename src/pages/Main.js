import React from 'react';
import { Container, Card } from 'semantic-ui-react'
import { className } from '../css/style.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Menubar from '../components/Menubar'
import Products from '../pages/Products'
import {withRouter, Link} from 'react-router-dom'
// import Cart from '../components/Sidebar'

class Main extends React.Component {
    render() {
        return(
             <React.Fragment>
                <div className='wrapper'>
                { <Navbar {...this.props} />}
                    <div className='content__wrap'>
                        <div className='content__row'>
                        
                            { <Products {...this.props} />}
                         
                        </div>
                        
                    </div>
       
             
                    { <Sidebar {...this.props} />}

                    { <Menubar {...this.props} />}
                </div>
              </React.Fragment>
        )
    }
}

export default withRouter(Main)