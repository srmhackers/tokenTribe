function Tokenomics() {
  return (
    <div class="grad">
      <form className="formm" action="index.html" method="post">
        <div className="top_feilds">
          <div className="top_span1">
            <h2>Enter your Token Name</h2>
            <input className="text_input" type="text" name="" value="" />
          </div>
          <div class="top_span1">
            <h2>Enter your Token Code</h2>
            <div class="dollar">
              <img id="dollar_pic" src="./pic.png" alt="" />
              <input className="text_input1" type="text" name="" value="" />
            </div>
          </div>
        </div>

        <center>
          <div className="middle_feilds">
            <h2>Enter Supply amount of the Token.</h2>
            <input
              className="text_input "
              id="m_text_input"
              type="text"
              name=""
              value=""
            />
          </div>
        </center>

        <center>
          <div className="last_feild">
            <span className="text_sahi">12345</span>
            <span className="text_sahi">#CodeToken</span>
            <h1>=</h1>
            <img id="polygon" src="./polygon.png" alt="" />
            <span class="text_sahi"> 123.45</span>
            <h1>Matic</h1>
          </div>
        </center>

        <center>
          <div class="end_feild">
            <img class="arrow" src="./left.png" alt="" />
            <h2>Mint Now</h2>
            <img class="arrow" src="./right.png" alt="" />
          </div>
        </center>
      </form>
    </div>
  )
}

export default Tokenomics
