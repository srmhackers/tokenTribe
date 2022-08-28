const { ethers } = require("ethers");
import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { contractAddress, abi } from "../constants.js";
// require("dotenv").config()

const provider = new ethers.providers.AlchemyProvider("maticmum");
// const signer = provider.getSigner()
// const contract = new ethers.Contract(contractAddress, abi, signer)
// console.log(contract.provider)

function Create() {
  const { address, isConnected } = useAccount();

  const [price, setPrice] = useState(0);
  const [pay, setPay] = useState(0);
  useEffect(() => {
    fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=MATIC&CMC_PRO_API_KEY=37950996-17b7-4681-8bc5-ef44cc37aaa9&convert=INR"
    )
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.data.MATIC.quote.INR.price);
      })
      .catch(console.error);
  });

  function changeHandler(e) {
    setPay((e.target.value * 1) / price);
    console.log(address);
  }

  async function clickHandler(e) {
    e.preventDefault();

    // const txn = await contract.mint(price);
    // txn.wait();
  }

  return (
    <form>
      <label htmlFor="tokenName">Token Name: </label>
      <input type="text" id="tokenName" name="tokenName" /> <br />
      <label htmlFor="tokenCode">Token Code: </label>
      <input type="text" id="tokenCode" name="tokenCode" /> <br />
      <label htmlFor="tokenSupply">Token Supply: </label>
      <input type="number" onChange={changeHandler} /> <br />
      {/* <button>Get Price</button> <br /> */}
      <span id="price">{pay ? pay : ""}</span>
      <br />
      <button onClick={clickHandler}>Mint Now</button>
    </form>
  );
}

export default Create;
