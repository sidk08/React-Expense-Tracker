import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderInfo from './HeaderInfo';
import TransactionList from './TransactionList';
import InputCompo from './InputComponent';

class App extends Component {

  state={
    txnList:[
    {description:'abc', amount:12.03, expense:true},
    {description:'xyz', amount:12.03, expense:false},
    {description:'asdasd', amount:12.03, expense:false}
    ],
    income : 24.06,
    exp : 12.03
  }

  

  clickHandler = (desc,amt,type)=>{
    // let desc = document.querySelector("input[type=text]");
    // let amt = Number(document.querySelector("input[type=number]").value);
    // let type = document.querySelector("select").selectedOptions[0].value;
    console.log(type);
    let newTxn ={description:desc.value, amount: amt, expense : (type === 'income' ? false : true) };
    const newtxnlist = [...this.state.txnList];
    newtxnlist.push(newTxn);

    const existincome = this.state.income;
    const newincome = (type === 'income' ? existincome + amt : existincome);

    const existexp = this.state.exp;
    const newexp = (type === 'expense' ? existexp + amt : existexp);

    this.setState({txnList:newtxnlist, income:newincome, exp:newexp});
  }


  render() {

    // let transaction=(
    //   this.state.txnList.map((txn,idx)=>{
    //     return(
    //       <li key={idx}>Description : {txn.description} Amount:{txn.amount} {txn.expense === true ? <span>Expense</span> : <span>Income</span>}</li>
    //     );
    //   })
    // );

    return (
      <div className="App">
        <HeaderInfo income={this.state.income} exp={this.state.exp}/>
        <InputCompo clickHandler={this.clickHandler}/>
        <TransactionList txnlist={this.state.txnList}/>
        {/* /* <ul>
          {transaction}
        </ul>
        
         <strong>Balance : {this.state.income - this.state.exp}</strong>
        <br/>
        <strong>Total Income :{this.state.income}</strong>&emsp;<strong>Total Expense :{this.state.exp}</strong>
        <br/> */}
      </div>
    );
  }
}

export default App;
