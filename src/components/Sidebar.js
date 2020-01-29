import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { className } from '../css/style.css'
import {Icon,Button } from 'semantic-ui-react'



const Cart = (props) => {


    const setData = props.data || []
    // console.log(setData)

        return (
                setData.map((item, index) => {
                    console.log(setData)
                    return(
                            
                            <div className='cart__product'>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                                 <Button.Group size='mini'> 
                                                 {/* <Button> */}
                                                 <Button id={item.id} onClick={(event) => this.increaseOrder(event, item.price)} >
                                                <Icon name='add' />
                                                    Add
                                                </Button>
                                                <Button>1</Button>
                                                <Button id={item.id} disabled={item.qty == 1 }>
                                                    <Icon name='minus' /> Min
                                                </Button>
                                                
                                                <Button id={item.id}>
                                                    <Icon name='trash alternate outline' /> Remove
                                                </Button> 
                                             </Button.Group>
                             </div>

                        
                    )
                       
                })    
        )
}

export default Cart

