var SchatzjagdCards;
(function (SchatzjagdCards) {
    let red = "#ff0404";
    let green = "#01ff1f";
    let blue = "#04a3ff";
    let yellow = "#ffd22a";
    let transparent = "#00000000";
    let horzMargin = 2;
    let vertBase = 39;
    let vertValue = 15;
    let offset = 7;
    let horzCenterLeft = 18.5;
    let poison = "Wirst Du verletzt,<br/>bist Du vergiftet!";
    let theft = "Fliehst Du,<br/>verlierst Du alles Gold!";
    // ÷ ½ × ˗ ˖ ₊ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ↻ ⟳
    SchatzjagdCards.enemy = {
        // test: { background: "CardFrontExample.svg" },
        card0: {
            head: "Hunne",
            image: { url: "../Images/Unhold_3_0.png", scale: 0.35, top: 14.2, left: 11 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertValue, color: red, content: "3" },
            ]
        },
        card1: {
            head: "Hunne",
            image: { url: "../Images/Unhold_3_1.png", scale: 0.35, top: 12.9, left: 13.2 },
            markers: [
                // { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertValue, color: red, content: "3" },
            ]
        },
        card2: {
            head: "Hunne",
            image: { url: "../Images/Unhold_3_2.png", scale: 0.35, top: 14.2, left: 11 },
            text: { content: theft },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertValue, color: red, content: "3" },
            ]
        },
        card3: {
            head: "Hunne",
            image: { url: "../Images/Unhold_3_3v.png", scale: 0.35, top: 14.2, left: 11 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertValue, color: red, content: "3" },
            ]
        },
        card4: {
            head: "Hunne",
            image: { url: "../Images/Unhold_3_4v.png", scale: 0.36, top: 14.2, left: 2 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertValue, color: red, content: "3" },
            ]
        },
    };
    SchatzjagdCards.city = {
        Gasthaus: {
            head: "Gasthaus",
            image: { url: "../Images/City_Gasthaus.png", scale: 0.4, top: 11, left: 7 },
            text: { content: "2 Goldstücke pro Runde<br/>für's Tellerwaschen" }
        },
    };
})(SchatzjagdCards || (SchatzjagdCards = {}));
