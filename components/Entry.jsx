import Image from "next/image";
import React from "react";

function Entry(props) {
  return (
    <>
      <div className="term">
        <Image height="320" src={require(`../assets/${props.img}`)} alt="" />
        <div style={{ padding: "0 2rem" }}>
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              {props.name}
            </span>
          </dt>
          <dd style={{ color: "white", marginTop: "1rem" }}>
            <button className="submit_button">Buy Now</button>
          </dd>
        </div>
      </div>
    </>
  );
}

export default Entry;
