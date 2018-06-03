import React from 'react';
import './Transaction.css';
// import editimg from './edit-pencil.png';
import deleteimg from './delete-dustbin.png';
const transac = (props) =>{
    return( <div className="txn">
                <span className="descbox">{props.desc}</span>
                <span className="box amtbox">${props.amt}</span>
                <span className="box typebox">{props.type}</span>
                {/* <img src={editimg} alt="edit transaction"/> */}
                <img src={deleteimg} alt="delete transaction" onClick={()=>props.deleteTxn(props.key)}/>
            </div>
    )
}

export default transac;