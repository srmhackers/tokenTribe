import Router from "next/router";
import { useState } from "react";

function Tokenomics() {
  const [tokenCode, setTokenCode] = useState("");
  const [tokenSupply, setTokenSupply] = useState("");
  const [buttonText, setButtonText] = useState("Mint Now");
  return (
    <div class="grad">
      <form className="formm">
        <div className="top_feilds">
          <div className="top_span1">
            <h2>Enter your Token Name</h2>
            <input className="text_input" type="text" name="" />
          </div>
          <div class="top_span1">
            <h2>Enter your Token Code</h2>
            <div class="dollar">
              <img id="dollar_pic" src="./pic.png" alt="" />
              <input
                className="text_input1"
                type="text"
                value={tokenCode}
                onChange={(e) => setTokenCode(e.target.value)}
              />
            </div>
          </div>
        </div>

        <center>
          <div className="middle_feilds">
            <h2>Enter Supply amount of the Token.</h2>
            <input
              className="text_input "
              value={tokenSupply}
              onChange={(e) => setTokenSupply(e.target.value)}
              id="m_text_input"
              type="number"
            />
          </div>
        </center>

        <center>
          <div className="last_feild">
            <span className="text_sahi">{tokenSupply || "xxxxx"}</span>
            <span className="text_sahi">#</span>
            <span className="text_sahi">{tokenCode || "CodeToken"}</span>
            <h1>=</h1>
            <img id="polygon" src="./polygon.png" alt="" />
            <span class="text_sahi"> 123.45</span>
            <h1>Matic</h1>
          </div>
        </center>

        <center>
          <button
            className="submit_button"
            onClick={(e) => {
              e.preventDefault();
              setButtonText("Minting in Process");
              setInterval(() => (location.href = "/minted"), 5000);
            }}
          >
            {buttonText}
          </button>
        </center>
      </form>
    </div>
  );
}

export default Tokenomics;
