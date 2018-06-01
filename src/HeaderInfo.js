import React from 'react';
import ValueBlock from './ValueBlock';
import './HeaderInfo.css'

const headerInfo = (props) => {
    return(
        <div className="HeaderInfo">
            <div>
                <ValueBlock value={(props.income).toFixed(2)} label='Income'/> - 
                <ValueBlock value={(props.exp).toFixed(2)} label='Expense'/> = 
                <ValueBlock value={(props.income - props.exp).toFixed(2)} label='Current Balance'/>
            </div>
        </div>
    )
}

export default headerInfo;