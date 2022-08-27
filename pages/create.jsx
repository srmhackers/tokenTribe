const { ethers } = require("ethers")
// require("dotenv").config()
function Create() {
  async function call(e) {
    e.preventDefault()
    fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=MATIC&CMC_PRO_API_KEY=37950996-17b7-4681-8bc5-ef44cc37aaa9&convert=INR"
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  return (
    <form>
      <label htmlFor="tokenName">Token Name: </label>
      <input type="text" id="tokenName" name="tokenName" /> <br />
      <label htmlFor="tokenCode">Token Code: </label>
      <input type="text" id="tokenCode" name="tokenCode" /> <br />
      <label htmlFor="tokenSupply">Token Supply: </label>
      <input type="number" /> <br />
      <button onClick={call}>Get Price</button>
      <button>Mint Now</button>
    </form>
  )
}

export default Create
