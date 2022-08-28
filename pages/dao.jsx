function DAO() {
  return (
    <div className="grad">
      <form className="formm">
        <h2>Enter DAO / Protocol / Community Name</h2>
        <input className="input-feild" type="text" name="" />
        <h2>
          <span style={{ fontSize: "1rem" }}>
            Describe more about your DAO / Protocol / Community ?
          </span>{" "}
          <br />
          <span style={{ fontSize: ".9rem" }}>( Add Relevant Links )</span>
        </h2>
        <input
          style={{ height: 90 }}
          className="input-feild"
          id="test"
          type="text"
        />
        <br />
        <center>
          <input
            onClick={(e) => {
              e.preventDefault();
              location.href = "/tokens";
            }}
            className="submit_button"
            type="submit"
            value="Continue"
          />
        </center>
      </form>
    </div>
  );
}
export default DAO;
