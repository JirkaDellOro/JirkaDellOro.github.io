namespace SchatzjagdCards {
  let red: string = "#ff0404";
  let green: string = "#01ff1f";
  let blue: string = "#04a3ff";
  let yellow: string = "#ffd22a";
  export let transparent: string = "#00000000";
  let xMargin: number = 2;
  let yBase: number = 48;
  let yType: number = 15;
  let offset: number = 7;
  // let horzCenterLeft: number = 18.5;

  let poison: string = "Wirst Du verletzt,<br/>bist Du vergiftet!";
  let theft: string = "Fliehst Du,<br/>verlierst Du alles Gold!";
  // ÷ ½ × ˗ ˖ ₊ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ↻ ⟳ ⌂ ⚕
  export let potions = {
    Detox: {
      count: 2,
      head: "Entgiftung",
      image: { url: "../Images/Detox.png", scale: 0.35, top: 15, left: 11 },
      text: { content: "Achtung: Entgiftung<br/>ist keine Heilung..." },
      markers: [
        { right: xMargin, top: yBase, color: green, content: "-0" },
        { right: xMargin - 1, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        // { right: xMargin + 1.0, top: yBase + 1.4, color: transparent, content: "❌" },
      ]
    },
    Heal: {
      count: 2,
      head: "Heilung",
      image: { url: "../Images/Heal.png", scale: 0.45, top: 22, left: 4 },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        { right: xMargin, top: yBase, color: green, content: "15" },
      ]
    },
    Power0: {
      count: 2,
      head: "Stärkeelixier",
      image: { url: "../Images/Power0.png", scale: 0.4, top: 18, left: 9 },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        { right: xMargin, top: yBase, color: red, content: "+1" },
      ]
    },
    Power1: {
      count: 1,
      head: "Superkraft",
      image: { url: "../Images/Power1.png", scale: 0.4, top: 18, left: 8 },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        { right: xMargin, top: yBase, color: red, content: "+2" },
      ]
    }
  }

  export let places = {
    Casino: {
      head: "Casino",
      image: { url: "../Images/Casino.png", scale: 0.35, top: 15, left: 11 },
      text: { content: "Spiele einfaches Roulette.<br/>Setze maximal<br/>3x pro Runde auf<br/>Pair oder Impair<br/>und würfle,<br/>um deinen<br/>Einsatz zu<br/>verdoppeln oder<br/>zu verlieren." },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+" },
        { left: xMargin, top: yBase, color: yellow, content: "-" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    DragonsLair: {
      head: "Drachenhöhle",
      image: { url: "../Images/DragonsLair.png", scale: 0.35, top: 15, left: 9.5 },
      text: { content: "Gehst<br/>Du hinein,<br/>würfle dein Schicksal!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
        { right: xMargin, top: yBase - 2 * offset, color: red, content: "+1" },
        { right: xMargin, top: yBase - 1 * offset, color: yellow, content: "+3" },
        { right: xMargin, top: yBase + 0 * offset, color: green, content: "+5" },
        { left: xMargin, top: yBase - 2 * offset, color: green, content: "-5" },
        { left: xMargin, top: yBase - 1 * offset, color: red, content: "-1" },
        { left: xMargin, top: yBase + 0 * offset, color: green, content: "0" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },

        { left: 0.3, top: 34, url: "../Images/DragonDice.svg" },
      ]
    },
    Teleportal: {
      count: 2,
      head: "Teleportal",
      image: { url: "../Images/Teleportal.png", scale: 0.35, top: 15, left: 9.5 },
      text: { content: "Schickt dich an einen<br/>beliebigen freien Ort<br/>außerhalb von Mauern<br/>im zufälligen Zielland!" },
      markers: [
        { left: xMargin, top: yBase - 1.5 * offset, color: green, content: "0" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },
        { left: 11, top: 36, url: "../Images/Teleportal.svg" },
      ]
    },
    Rumpelstilz: {
      head: "Rumpelstilz",
      image: { url: "../Images/Rumpelstilz.png", scale: 0.35, top: 15, left: 9.5 },
      text: { content: "Gelingt es dir,<br/>eine Zahl zu nennen<br/>und sie daraufhin<br/>zu würfeln, erhältst<br/>Du 6 Goldstücke!" },
      markers: [
        { right: xMargin, top: yBase - 0 * offset, color: yellow, content: "+6" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Elf: {
      head: "Elf, der Wegweiser",
      image: { url: "../Images/Elf.png", scale: 0.35, top: 15, left: 9.5 },
      text: { content: "Würfelst Du eine<br/>5 oder eine 6,<br/>so zeigt dir der Elf<br/>eine beliebige Karte<br/>im Reich!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Dealer: {
      head: "Händler",
      image: { url: "../Images/Dealer.png", scale: 0.4, top: 17, left: 7.5 },
      text: { content: "Tauscht seine Karte<br/>gegen eine von deinen.<br/>Die erste Karte<br/>erhält er vom Stapel." },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Tornado: {
      head: "Wirbelsturm",
      image: { url: "../Images/Tornado.png", scale: 0.4, top: 17, left: 7.5 },
      text: { content: "Jeder Spieler zieht von<br/>seinem rechten Nachbarn<br/>gleichzeitig eine Karte,<br/>...auch Schätze!<br/>Dann legt sich der Sturm<br/>auf den Ablagestapel." },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Arena: {
      head: "Gladiatorenarena",
      image: { url: "../Images/Arena.png", scale: 0.4, top: 17, left: 7.5 },
      text: { content: "Forderst Du<br/>einen Ritter heraus,<br/>wird er sofort<br/>zum Zweikampf<br/>hierher teleportiert.<br/>Danach stürzt<br/>die Arena ein" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
  }
  export let enemies = {
    Hun0: {
      head: "Hunne",
      image: { url: "../Images/Hun0.png", scale: 0.35, top: 21.2, left: 11 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+2" },
        { left: xMargin, top: yType, color: red, content: "3" },
      ]
    },
    Hun1: {
      head: "Hunne",
      image: { url: "../Images/Hun1.png", scale: 0.35, top: 21.2, left: 13.2 },
      markers: [
        // { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+2" },
        { left: xMargin, top: yType, color: red, content: "3" },
      ]
    },
    Hun2: {
      head: "Hunne",
      image: { url: "../Images/Hun2.png", scale: 0.38, top: 21.2, left: 10 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+2" },
        { left: xMargin, top: yType, color: red, content: "3" },
      ]
    },
    Hun3: {
      head: "Hunne",
      image: { url: "../Images/Hun3v.png", scale: 0.35, top: 21.2, left: 11 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+2" },
        { left: xMargin, top: yType, color: red, content: "3" },
      ]
    },
    Hun4: {
      head: "Hunne",
      image: { url: "../Images/Hun4v.png", scale: 0.36, top: 18.2, left: 2 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+2" },
        { left: xMargin, top: yType, color: red, content: "3" },
      ]
    },
    Hun5: {
      head: "Hunne",
      image: { url: "../Images/Hun5v.png", scale: 0.38, top: 17, left: 9 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+2" },
        { left: xMargin, top: yType, color: red, content: "3" },
      ]
    },
    Robber0: {
      head: "Räuber",
      image: { url: "../Images/Robber0.png", scale: 0.4, top: 23, left: 9 },
      text: { content: theft },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+3" },
        { left: xMargin, top: yType, color: red, content: "6" },
      ]
    },
    Robber1: {
      head: "Räuber",
      image: { url: "../Images/Robber1.png", scale: 0.4, top: 20, left: 2 },
      text: { content: theft },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+3" },
        { left: xMargin, top: yType, color: red, content: "6" },
      ]
    },
    Robber2: {
      head: "Räuber",
      image: { url: "../Images/Robber2.png", scale: 0.4, top: 22, left: 2 },
      text: { content: theft },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+3" },
        { left: xMargin, top: yType, color: red, content: "6" },
      ]
    },
    Robber3: {
      head: "Räuber",
      image: { url: "../Images/Robber3.png", scale: 0.4, top: 19, left: 7 },
      text: { content: theft },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+3" },
        { left: xMargin, top: yType, color: red, content: "6" },
      ]
    },
    German0: {
      head: "Germane",
      image: { url: "../Images/German0.png", scale: 0.34, top: 24, left: 9 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+4" },
        { left: xMargin, top: yType, color: red, content: "9" },
      ]
    },
    German1: {
      head: "Germane",
      image: { url: "../Images/German1.png", scale: 0.36, top: 16, left: 7 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+4" },
        { left: xMargin, top: yType, color: red, content: "9" },
      ]
    },
    German2: {
      head: "Germane",
      image: { url: "../Images/German2.png", scale: 0.4, top: 19, left: 2.5 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+4" },
        { left: xMargin, top: yType, color: red, content: "9" },
      ]
    },
    Boss0: {
      head: "Hunnenhauptmann",
      image: { url: "../Images/Boss0.png", scale: 0.37, top: 17, left: 6 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+5" },
        { left: xMargin, top: yType, color: red, content: "12" },
      ]
    },
    Boss1: {
      head: "Räuberhauptmann",
      image: { url: "../Images/Boss1.png", scale: 0.38, top: 22, left: 6 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin, top: yBase, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+5" },
        { left: xMargin, top: yType, color: red, content: "12" },
      ]
    },
    Boss2: {
      head: "Germanenhauptmann",
      image: { url: "../Images/Boss2.png", scale: 0.37, top: 17.3, left: 6.4 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+5" },
        { left: xMargin, top: yType, color: red, content: "12" },
      ]
    },
    Giant0: {
      head: "Rufus der Riese",
      image: { url: "../Images/Giant0.png", scale: 0.37, top: 17, left: 6.4 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+6" },
        { left: xMargin, top: yType, color: red, content: "15" },
      ]
    },
    Giant1: {
      head: "Igor der Riese",
      image: { url: "../Images/Giant1.png", scale: 0.38, top: 17, left: 9 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin - 0.2, top: yBase - 0.2, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+6" },
        { left: xMargin, top: yType, color: red, content: "15" },
      ]
    },
    ShoWung: {
      head: "Sho-Wung",
      image: { url: "../Images/ShoWung.png", scale: 0.4, top: 18.3, left: 3.7 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+8" },
        { left: xMargin, top: yType, color: red, content: "20" },
      ]
    },
    Warpig: {
      head: "Warpig",
      image: { url: "../Images/Warpig.png", scale: 0.42, top: 19, left: 6.1 },
      text: { content: poison },
      markers: [
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin - 0.2, top: yBase - 0.2, url: "../Images/Turn.svg", scale: 1 },
        { right: xMargin, top: yBase, color: yellow, content: "+10" },
        { left: xMargin, top: yType, color: red, content: "25" },
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
