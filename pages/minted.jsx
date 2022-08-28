function Ticket() {
  return (
    <div class="grad">
      <form>
        <center>
          <img src="./transfer-data.png" alt="" />
          <h2>Your Token has been minted.</h2>
          <input
            onClick={(e) => {
              e.preventDefault();
              location.href = "/shop";
            }}
            style={{ cursor: "pointer" }}
            class="input-feild"
            type="submit"
            name=""
            value="Continue"
          />
        </center>
      </form>
    </div>
  );
}

export default Ticket;
