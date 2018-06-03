import React from 'react';
import Transaction from './Transaction';
import './TransactionList.css';

const transacList = (props) =>{

    const transaction = (
        props.txnlist.map((txn,idx)=>{
           return( <Transaction key={idx} 
                                desc={txn.description} 
                                amt={txn.amount} 
                                type={txn.expense === true ? 'Expense': 'Income'}
                                deleteTxn={()=>{props.delHandler(idx)}}/>)
        })
    )
    return(
        // <div>
        <div className='txnList'>
        <div className="header">
                <span className="descbox">Description</span>
                <span className="box amtbox">Amount</span>
                <span className="box typebox">Income/Expense</span>
        </div>
                {transaction}
        </div>
        // </div>
    )

}

export default transacList;