var SchatzjagdCards;
(function (SchatzjagdCards) {
    let red = "ff0404";
    let green = "01ff1f";
    let blue = "04a3ff";
    let yellow = "ffd22a";
    let horzMargin = 10;
    let vertBase = 40;
    let vertOffset = 12;
    // ÷ ½ × ˗ ˖ ₊ 
    SchatzjagdCards.data = {
        test: { background: "CardFrontExample.svg" },
        card0: {
            head: "Hunne",
            image: { url: "../Images/Unhold_3_0.png", scale: 0.193, top: 8, left: 9 },
            text: { content: "Fliehst Du,<br/>verlierst Du alles Gold!" },
            markers: [{ left: horzMargin, top: vertBase, color: yellow, content: "₊2" }]
        },
        card1: {
            head: "Gasthaus",
            image: { url: "../Images/City_Gasthaus.png", scale: 0.4, top: 11, left: 7 },
            text: { content: "2 Goldstücke pro Runde<br/>für's Tellerwaschen" }
        },
        card2: { head: "Germane" },
        card3: { head: "Riese" },
        card4: { head: "Warpig" },
    };
})(SchatzjagdCards || (SchatzjagdCards = {}));