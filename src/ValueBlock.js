import React from 'react';
import './ValueBlocks.css'

const valueBlock = (props) =>(
    <div className="ValueBlock">
        ${props.value}
        <br/>
        <p>{props.label}</p>
    </div>
)

export default valueBlock;
