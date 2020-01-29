import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import className from '../css/style.css'
import {Icon,Button, Menu, Input } from 'semantic-ui-react'

class Order extends Component {
    componentDidMount(){
        this.getListOrder()
    }
    state = {
        dataProduct: [],
        cart: [],
        order: [],
        grandTotal: 0
    }
    getListOrder = () => {
        axios.get('http://127.0.0.1:3001/products')
        .then(res => {
            this.setState({dataProduct: res.data.data})  
        })
        .catch(err => {
            console.log(err);
        })
    }
    increaseOrder = (event, price) => {
        this.setState({
            order: this.state.order.map((order) => (order.product_id == event.target.id ? 
                {...order, qty: order.qty + 1, totalPrice:price*(order.qty+1)} : order)),
            grandTotal : this.state.grandTotal + parseInt(price)
        })   
    }
    deleteListCart = (event) => {
        const list = 0
        this.state.order.map((order, index) => {
            if(order.product_id == event.target.id){ 
            }
        })
        let cartForDelete = this.state.cart.filter((data) => {
            return data.id != event.target.id
        })
        let orderForDelete = this.state.cart.filter((data) => {
            return data.id != event.target.id
        })
        this.setState({
            cart: cartForDelete,
            order: orderForDelete,
            grandTotal: this.state.grandTotal - parseInt(list)
        })
    }
    decreaseOrder = (event, price) => {
        this.setState({
            order: this.state.order.map((order)=>(order.product_id == event.target.id ? {...order, qty:order.qty - 1, totalPrice:price*(order.qty-1)} : order)),
            grandTotal : this.state.grandTotal - parseInt(price)
        })
    }
    handleCheckOut = (event) => {
        event.preventDefault()
        const data ={ 
            order: this.state.order
        }

        const body = qs.stringify(data)
       
        
            axios.post('http://127.0.0.1:3001/orders', body)
            .then(res => {
                if(res.status === 200) {
                    try{
                        alert('Order Success')
                        this.props.history.push('/')
                    } catch(err) {

                    }
                }
            })
            .catch(err => {

            })
  
    }
    onSelectProduct = (event, data) => {
        let checkProduct = []
        if(this.state.cart.length === 0){
            this.setState({
                cart: [...this.state.cart, data],
                order: [...this.state.order, {
                    product_id: data.id,
                    qty: 1,
                    name: data.name,
                    price: data.price,
                    subtotal: data.price*1
                }],
                grandTotal: this.state.grandTotal + parseInt(data.price)
            }, () => {

            })
        }else{
            this.state.cart.map((item, index) => {
                if(item.product_id === data.id){
                    checkProduct.push('1')
                }
            })
            if(checkProduct.length === 0){
                this.setState({
                    cart:[...this.state.cart, data],
                    order: [...this.state.order, {
                        product_id: data.id,
                        qty: 1,
                        name: data.name,
                        price: data.price,
                        subtotal: data.price*1
                    }],
                     grandTotal: this.state.grandTotal + parseInt(data.price)
                },()=>{
                })
            }else{   
            }
        }
    }
    handleCheckOut = async (event) => {
        const body = {
            order: this.state.order
        }
        console.log(body);
        
        await axios.post('http://127.0.0.1:3001/orders', body).then(
            res=>{
                this.setState({
                    cart: [],
                    order: []
                })
             })
            .catch(console.log)
    }
    getSearch = async (event, values) => {
        event.preventDefault()
        if(values !== ''){
            await axios.get(`http://127.0.0.1:3001/products/?name=${values}`)
            .then(res=>{
                this.setState((prevState, currentState) => {
                    return {
                        ...prevState,
                        dataProduct: [...res.data.data]
                    }
                })
            })
        } else {
            await axios.get(`http://127.0.0.1:3001/products/`)
            .then(res => {
                this.setState((prevState, currentState) => {
                    return{
                        ...prevState,
                        dataProduct:[...res.data.data]
                    }
                })
            })
        }
    }


    render() {
        return (
  
                <div>  
                    <input className='search' placeholder='Search product..' onChange={(event) => this.getSearch(event, event.target.value)}/> 
               {this.state.dataProduct.map((item, index) => {
                    return(
                    <div>
                        <a  key={item.id} onClick={(event) => this.onSelectProduct(event, item)} href="#">
                        <div className='content__post'>
                            <div className='post__img'>
                                <img alt="" src={`http://127.0.0.1:3001/`+`${item.image}`}/>
                            </div>
                            <div className='post__des'>
                                <p className='item__name'>{item.name}</p>
                                <p className='item__price'>{item.price}</p>
                            </div>
                        </div>
                        </a>
                    </div>  
                    )
                })} 

            <div className='sidebar'>
             <div className='list__order'>
                {this.state.order.map((item, index) => {
                    return(
                        <div className='cart__product'>
                            <div>{item.name}</div>
                            <div>{item.price*item.qty}</div>
                                <Button.Group size='mini'> 
                                    <Button id={item.product_id} disabled={item.qty == 1 } onClick={(event) =>         this.decreaseOrder(event, item.price)}>
                                        <Icon name='minus' /> Min</Button>             
                                    <Button>{item.qty}</Button>
                                    <Button id={item.product_id} onClick={(event) => this.increaseOrder(event, item.price)} >
                                        <Icon name='add' /> Add</Button>       
                                    <Button id={item.id} onClick={(event) => {this.deleteListCart(event)}}>
                                        <Icon name='trash alternate outline' /> Remove
                                    </Button>
                                </Button.Group>           
                            </div> 
                    )  
                })}
            </div>  
                <div className='checkOut'>
                    <div>Total: {this.state.grandTotal+(this.state.grandTotal*0.10)}</div>
                        <Button.Group size='mini'> 
                             <button onClick={(event) => this.handleCheckOut(event)} type='submit'>Checkout</button>
                        </Button.Group>
                    </div>
                </div> 
             </div>
        )
    }
}

export default Order;