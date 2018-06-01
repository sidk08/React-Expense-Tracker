import React from 'react';
import './Transaction.css'
const transac = (props) =>{
    return( <div className="txn">
                <span className="descbox">{props.desc}</span>
                <span className="box amtbox">${props.amt}</span>
                <span className="box typebox">{props.type}</span>
            </div>
    )
}

export default transac;