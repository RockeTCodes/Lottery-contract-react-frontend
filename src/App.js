import React, { useEffect, useState } from "react";
import web3 from "./web3";
import lottery from "./lottery";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import BANNER from "./banner.jpg";
import ReactConfetti from "react-confetti";





function App() {


  
  const [manager , setManager] = useState("");
  const [players , setPlayers] = useState([]);
  const [balance , setBalance] = useState("");
  const [value , setValue]  = useState("");
  const [message, setMessage] = useState("");
  const [winnerDeclared,setWinnerDeclared] = useState(false);

  useEffect(()=>{


    async function abc(){
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
  
  
      setManager(manager);
      setPlayers(players);
      setBalance(balance); 
    }

   abc();


  });


  async function onSubmit(event){
    event.preventDefault();
    

    const accounts = await web3.eth.getAccounts();
    setMessage("Waiting for transaction to complete......");
    await lottery.methods.enter().send({from:accounts[0],value:web3.utils.toWei(value,"ether")});
    setMessage("You have been entered into the lottery.");
  }


  async function onClick(){
    const accounts = await web3.eth.getAccounts();
    setMessage("Picking the winner please wait a while....");
    await lottery.methods.pickWinner().send({from:accounts[0]});

    setMessage("Winner has been picked.");
    setWinnerDeclared(true);
  }

  return (
    
    <div>
    {winnerDeclared && <ReactConfetti/>}
    
    <h1>Lottery Contract</h1>
    <h2>This contract is managed by {manager}</h2>
    <p>There are curently {players.length} people who have entered themselves into the lottery,competing to win {web3.utils.fromWei(balance,"ether")} ether!</p>
    <hr/>

<form onSubmit={onSubmit}>
  <h3>Want to try your luck ?</h3>
  <div>
    <input value={value} onChange={(event)=>{setValue(event.target.value)}} placeholder="Enter the amount in ether"></input>
    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
  </div>
</form>

<div className="message">
<img src={BANNER}/>
<div className="center"><h4>{message}</h4></div>
</div>




<div className="footer">
<h3>Ready to pick winner ?</h3>
<IconButton onClick={onClick} aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
</div>





    </div>
  );
}

export default App;
