import { useState } from "react";

const SpreadCallBack = () => {
  const [myFavoriteThings, setmyFavoriteThings] = useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];

  const thingsElements = myFavoriteThings.map((thing) => {
    return (<p key={thing}>{thing}</p>);
  });

  const addFavoriteThing = () => {
    setmyFavoriteThings((prevThings) => [...prevThings, allFavoriteThings[prevThings.length]]);
  };

  return (
    <main>
      <button onClick={addFavoriteThing} style={{backgroundColor:"pink"}}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
};

export default SpreadCallBack;
