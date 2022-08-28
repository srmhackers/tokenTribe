import React, { useState } from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia";
import Navbar from "../components/Navbar";

//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function App() {
  const [menuState, setMenuState] = useState("merches");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.imgURL}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
            img={emojiTerm.image}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
