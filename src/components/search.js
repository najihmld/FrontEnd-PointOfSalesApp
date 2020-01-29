// import React, { Component } from 'react';
// import { withRouter, Link } from 'react-router-dom';
// import { className } from '../css/style.css'
// import {Icon,Button, Menu, Input } from 'semantic-ui-react'
// import axios from 'axios';


// class Search extends Component {


//     getSearch = async (event, values) => {
//         event.preventDefault()
//         if(values !== ''){
//             await axios.get(`http://127.0.0.1:3001/products/?name=${values}`)
//             .then(res=>{
//                 this.setState((prevState, currentState) => {
//                     return {
//                         ...prevState,
//                         dataProduct: [...res.data.data]
//                     }
//                 })
//             })
//         } else {
//             await axios.get(`http://127.0.0.1:3001/products/`)
//             .then(res => {
//                 this.setState((prevState, currentState) => {
//                     return{
//                         ...prevState,
//                         dataProduct:[...res.data.data]
//                     }
//                 })
//             })
//         }
//     }


//     render() {
//         return(
//             <div>
//                   <Menu.Menu position='right'>
//                                 <Input icon='search' placeholder='Search Menu..' onChange={(event) => this.getSearch(event, event.target.value)}/> 
//                     </Menu.Menu>
//             </div>
//         )
//     }
// }

// export default withRouter(Search)