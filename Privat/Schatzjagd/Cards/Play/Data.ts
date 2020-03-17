namespace SchatzjagdCards {
  let red: string = "#ff0404";
  let green: string = "#01ff1f";
  let blue: string = "#04a3ff";
  let yellow: string = "#ffd22a";
  let transparent: string = "#00000000";
  let horzMargin: number = 2;
  let vertBase: number = 39;
  let vertPower: number = 15;
  let offset: number = 7;
  let horzCenterLeft: number = 18.5;

    let poison: string = "Wirst Du verletzt,<br/>bist Du vergiftet!";
  let theft: string = "Fliehst Du,<br/>verlierst Du alles Gold!";
  // ÷ ½ × ˗ ˖ ₊ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ↻ ⟳

  export let enemy = {
    // test: { background: "CardFrontExample.svg" },
   Hun0: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_0.png", scale: 0.35, top: 17.2, left: 11 },
      markers: [
        { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
        { left: horzMargin, top: vertPower, color: red, content: "3" },
      ]
    },
   Hun1: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_1.png", scale: 0.35, top: 17.2, left: 13.2 },
      markers: [
        // { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
        { left: horzMargin, top: vertPower, color: red, content: "3" },
      ]
    },
   Hun2: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_2.png", scale: 0.38, top: 17.2, left: 10 },
      markers: [
        { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
        { left: horzMargin, top: vertPower, color: red, content: "3" },
      ]
    },
   Hun3: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_3v.png", scale: 0.35, top: 17.2, left: 11 },
      text: { content: poison },
      markers: [
        { left: horzMargin, top: vertBase, color: green, content: "˗1" },
        { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
        { left: horzMargin, top: vertPower, color: red, content: "3" },
      ]
    },
   Hun4: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_4v.png", scale: 0.36, top: 14.2, left: 2 },
      text: { content: poison },
      markers: [
        { left: horzMargin, top: vertBase, color: green, content: "˗1" },
        { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
        { left: horzMargin, top: vertPower, color: red, content: "3" },
      ]
    },
   Hun5: {
      head: "Hunne",
      image: { url: "../Images/Unhold_3_5v.png", scale: 0.38, top: 15, left: 9 },
      text: { content: poison },
      markers: [
        { left: horzMargin, top: vertBase, color: green, content: "˗1" },
        { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
        { left: horzMargin, top: vertPower, color: red, content: "3" },
      ]
    },
    Robber0: {
      head: "Räuber",
      image: { url: "../Images/Unhold_5_0.png", scale: 0.4, top: 19, left: 9 },
      text: { content: theft },
      markers: [
        { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
        { left: horzMargin, top: vertPower, color: red, content: "5" },
      ]
    },
    Robber1: {
      head: "Räuber",
      image: { url: "../Images/Unhold_5_1.png", scale: 0.4, top: 16, left: 2 },
      text: { content: theft },
      markers: [
        { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
        { left: horzMargin, top: vertPower, color: red, content: "5" },
      ]
    },
    Robber2: {
      head: "Räuber",
      image: { url: "../Images/Unhold_5_2.png", scale: 0.4, top: 18, left: 2 },
      text: { content: theft },
      markers: [
        { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
        { left: horzMargin, top: vertPower, color: red, content: "5" },
      ]
    },
    Robber3: {
      head: "Räuber",
      image: { url: "../Images/Unhold_5_3.png", scale: 0.4, top: 15, left: 6 },
      text: { content: theft },
      markers: [
        { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
        { left: horzMargin, top: vertPower, color: red, content: "5" },
      ]
    },
    German0: {
      head: "Germane",
      image: { url: "../Images/Unhold_8_0.png", scale: 0.34, top: 20, left: 9 },
      markers: [
        { right: horzMargin, top: vertBase, color: yellow, content: "₊4" },
        { left: horzMargin, top: vertPower, color: red, content: "8" },
      ]
    },
    German1: {
      head: "Germane",
      image: { url: "../Images/Unhold_8_1.png", scale: 0.36, top: 12, left: 7 },
      text: { content: poison },
      markers: [
        { left: horzMargin, top: vertBase, color: green, content: "˗1" },
        { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊4" },
        { left: horzMargin, top: vertPower, color: red, content: "8" },
      ]
    },
    German2: {
      head: "Germane",
      image: { url: "../Images/Unhold_8_2.png", scale: 0.4, top: 15, left: 2.5 },
      text: { content: poison },
      markers: [
        { left: horzMargin, top: vertBase, color: green, content: "˗1" },
        { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
        { right: horzMargin, top: vertBase, color: yellow, content: "₊4" },
        { left: horzMargin, top: vertPower, color: red, content: "8" },
      ]
    },
  };
  
  export let city = {
    Gasthaus: {
      head: "Gasthaus",
      image: { url: "../Images/City_Gasthaus.png", scale: 0.4, top: 11, left: 7 },
      text: { content: "2 Goldstücke pro Runde<br/>für's Tellerwaschen" }
    },
  }
}
