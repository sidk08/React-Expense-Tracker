import React from 'react';
import './InputComponent.css';
const inputComp = (props) => {

    const clicked = ()=>{
        let desc = document.querySelector("input[type=text]");
        let amt = Number(document.querySelector("input[type=number]").value);
        amt = amt < 0 ? amt*-1:amt;
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
        document.querySelector("input[type=number]").value= "";
    }



    return(
        <div className="InputCompo">
         <input type="text"defaultValue="" placeholder="    Enter description"/>
          &emsp;
          <input type="number" defaultValue="" placeholder="    Enter amount"  min="0.0" step="0.01"/>
          &emsp;
          <select defaultValue="expense">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          &emsp;
          <button onClick={()=>{clicked()}}>Add expense</button>
        </div>
    )
}

export default inputComp;