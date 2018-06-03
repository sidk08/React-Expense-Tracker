import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderInfo from './HeaderInfo';
import TransactionList from './TransactionList';
import InputCompo from './InputComponent';

class App extends Component {

  state={
    txnList:[
    {description:'Apartment repairs', amount:12.03, expense:true},
    {description:'Salary', amount:12.03, expense:false},
    {description:'Alphabet stocks profit', amount:12.03, expense:false}
    ],
    income : 24.06,
    exp : 12.03
  }

  

  clickHandler = (desc,amt,type)=>{
    let newTxn ={description:desc.value, amount: amt, expense : (type === 'income' ? false : true) };
    const newtxnlist = [...this.state.txnList];
    newtxnlist.push(newTxn);

    const existincome = this.state.income;
    const newincome = (type === 'income' ? existincome + amt : existincome);

    const existexp = this.state.exp;
    const newexp = (type === 'expense' ? existexp + amt : existexp);

    this.setState({txnList:newtxnlist, income:newincome, exp:newexp});

    // this.deleteTxn(1);
  }

  deleteTxn =(idx)=>{
    const txnlist=this.state.txnList;

    let amt = txnlist[idx].amount;
    let newincome=this.state.income;
    let newexp=this.state.exp;
    let txntype = txnlist[idx].expense;

    txntype === false ? newincome = newincome-amt:newexp=newexp-amt;

    txnlist.splice(idx,1);

    this.setState({txnList:txnlist, income:newincome,exp:newexp});

  }


  render() {
    return (
      <div className="App">
        <HeaderInfo income={this.state.income} exp={this.state.exp}/>
        <InputCompo clickHandler={this.clickHandler} />
        <TransactionList txnlist={this.state.txnList} delHandler={this.deleteTxn}/>
      </div>
    );
  }
}

export default App;
