import React from 'react';
import './InputComponent.css';
const inputComp = (props) => {

    const clicked = ()=>{
        let desc = document.querySelector("input[type=text]");
        let amt = Number(document.querySelector("input[type=number]").value);
        // amt = amt < 0 ? amt*-1:amt;
        const type = document.querySelector("select").selectedOptions[0].value;

        if(desc.value.trim() === ""){
            alert("Enter Description");
            return;
        }
        if(amt === 0){
            alert("Enter amount");
            return;
        }
        props.clickHandler(desc,amt,type)
        desc.value="";
        document.querySelector("input[type=number]").value= "0.0";
    }



    return(
        <div className="InputCompo">
         <input type="text" placeholder="Enter description"/>
          &emsp;
          <input type="number" placeholder="Enter amount"  value= "0.0" min="0.0" step="0.01" oninput="validity.valid||(value='');"/>
          &emsp;
          <select>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          &emsp;
          <button onClick={()=>{clicked()}}>Add expense</button>
        </div>
    )
}

export default inputComp;