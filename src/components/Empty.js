import React from 'react';
import { ReactComponent as Empty } from '../images/empty.svg'
import { className } from '../css/style.css'


class Main extends React.Component {
    render() {
        return(
            <div className='empty__order'>
            <Empty />
            <br/>
            </div>
        )
    }
}

export default Empty;