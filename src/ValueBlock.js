import React from 'react';
import './ValueBlocks.css'

const valueBlock = (props) =>(
    <div className="ValueBlock">
        <p>${props.value}</p>
        <p>{props.label}</p>
    </div>
)

export default valueBlock;
