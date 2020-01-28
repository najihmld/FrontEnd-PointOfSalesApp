import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap'
import Cart from '../components/Sidebar'
import className from '../css/style.css'



class Order extends Component {
    componentDidMount(){
        this.getListOrder()
    }

    state = {
        dataProduct: [],
        isLoading: false,
        cart: [],

    }

    
    getListOrder = () => {
        this.setState({isLoading: true})
        axios.get('http://127.0.0.1:3001/products')
        .then(res => {
            this.setState({dataProduct: res.data.data})
            console.log(res.data.data);
            
        })
        .catch(err => {
            console.log(err);
            
        })
        .finally(() => {
            // this.setState({isLoading: false})
            setTimeout(() => {
                this.setState({isLoading: false})
            }, 2000)
        })

    }

    onSelectProduct = (event, item) => {
        event.preventDefault()
        console.log(item);
        this.setState({
            cart: [...this.state.cart, item]
        })
        
        
    }


    render() {
        // console.log(this.state.cart);
        // console.log(this.state.dataProduct);
        
        return (
            this.state.isLoading ? (
                <center><Spinner color="primary"/></center>
                
            ): (

                <div>  
                    <div className='sidebar'>
                    <div className='list__order'>
                    <Cart data={this.state.cart} />
                    </div>  
                    </div>    

               {this.state.dataProduct.map((item, index) => {
                    return(
                    <React.Fragment>
                    {/* <Cart data={this.state.cart} /> */}
                    <div>
                        <a  key={item.id} onClick={(event) => this.onSelectProduct(event, item)} href="javascript:void(0)">
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
                    </React.Fragment>    
                    )
                })}
                </div>
            )
    
        )
    }
}

export default Order;