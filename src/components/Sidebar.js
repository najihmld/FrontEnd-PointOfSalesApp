import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { className } from '../css/style.css'
import {     
    Segment,
    Card,
    Icon,
    Grid,
    Header,
    Button,
    Input,
    Menu,
    CardContent } from 'semantic-ui-react'


const Cart = (props) => {

    const setData = props.data || []
    let qty = 1

        return (
                setData.map((item, index) => {
                    console.log(setData)
                    return(
                            
                            <div className='cart__product'>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                                 <Button.Group size='mini'> 
                                                <Button id={item.id} >
                                                    <Icon name='add' />
                                                    Add
                                                </Button>
                                                <Button>{qty}</Button>
                                                <Button id={item.id} disabled={item.qty == 1 }>
                                                    <Icon name='minus' /> Min
                                                </Button>
                                                {/* <Button id={item.id}>
                                                    <Icon name='trash alternate outline' />
                                                </Button> */}
                                                </Button.Group>
                                    
                             </div>

                        
                    )
                       
                })    
        )
}

export default Cart

