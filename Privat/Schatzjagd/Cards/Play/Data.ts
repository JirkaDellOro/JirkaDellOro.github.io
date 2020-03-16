namespace SchatzjagdCards {
  let red: string = "ff0404";
  let green: string = "01ff1f";
  let blue: string = "04a3ff";
  let yellow: string = "ffd22a";
  let horzMargin: number = 10;
  let vertBase: number = 40;
  let vertOffset: number = 12;

  export let data = {
    test: { background: "CardFrontExample.svg" },
    card0: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_0.png", scale: 0.193, top: 8, left: 9 },
      text: { content: "Fliehst Du,<br/>verlierst Du alles Gold!"},
      markers: [{left: horzMargin, top: vertBase, color: yellow, content: "½"}]
    },
    card1: {
      head: "Gasthaus",
      image: { url: "../Images/City_Gasthaus.png", scale: 0.4, top: 11, left: 7 },
      text: { content: "2 Goldstücke pro Runde<br/>für's Tellerwaschen"}
    },
    card2: { head: "Germane" },
    card3: { head: "Riese" },
    card4: { head: "Warpig" },
  };
}
