var SchatzjagdCards;
(function (SchatzjagdCards) {
    let red = "#ff0404";
    let green = "#01ff1f";
    let blue = "#04a3ff";
    let yellow = "#ffd22a";
    let transparent = "#00000000";
    let horzMargin = 2;
    let vertBase = 39;
    let vertPower = 15;
    let offset = 7;
    let horzCenterLeft = 18.5;
    let poison = "Wirst Du verletzt,<br/>bist Du vergiftet!";
    let theft = "Fliehst Du,<br/>verlierst Du alles Gold!";
    // ÷ ½ × ˗ ˖ ₊ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ↻ ⟳
    SchatzjagdCards.enemy = {
        // test: { background: "CardFrontExample.svg" },
        Hun0: {
            head: "Hunne",
            image: { url: "../Images/Hun0.png", scale: 0.35, top: 17.2, left: 11 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertPower, color: red, content: "3" },
            ]
        },
        Hun1: {
            head: "Hunne",
            image: { url: "../Images/Hun1.png", scale: 0.35, top: 17.2, left: 13.2 },
            markers: [
                // { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertPower, color: red, content: "3" },
            ]
        },
        Hun2: {
            head: "Hunne",
            image: { url: "../Images/Hun2.png", scale: 0.38, top: 17.2, left: 10 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊2" },
                { left: horzMargin, top: vertPower, color: red, content: "3" },
            ]
        },
        Hun3: {
            head: "Hunne",
            image: { url: "../Images/Hun3v.png", scale: 0.35, top: 17.2, left: 11 },
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
            image: { url: "../Images/Hun4v.png", scale: 0.36, top: 14.2, left: 2 },
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
            image: { url: "../Images/Hun5v.png", scale: 0.38, top: 15, left: 9 },
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
            image: { url: "../Images/Robber0.png", scale: 0.4, top: 19, left: 9 },
            text: { content: theft },
            markers: [
                { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
                { left: horzMargin, top: vertPower, color: red, content: "6" },
            ]
        },
        Robber1: {
            head: "Räuber",
            image: { url: "../Images/Robber1.png", scale: 0.4, top: 16, left: 2 },
            text: { content: theft },
            markers: [
                { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
                { left: horzMargin, top: vertPower, color: red, content: "6" },
            ]
        },
        Robber2: {
            head: "Räuber",
            image: { url: "../Images/Robber2.png", scale: 0.4, top: 18, left: 2 },
            text: { content: theft },
            markers: [
                { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
                { left: horzMargin, top: vertPower, color: red, content: "6" },
            ]
        },
        Robber3: {
            head: "Räuber",
            image: { url: "../Images/Robber3.png", scale: 0.4, top: 15, left: 6 },
            text: { content: theft },
            markers: [
                { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊3" },
                { left: horzMargin, top: vertPower, color: red, content: "6" },
            ]
        },
        German0: {
            head: "Germane",
            image: { url: "../Images/German0.png", scale: 0.34, top: 20, left: 9 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊4" },
                { left: horzMargin, top: vertPower, color: red, content: "9" },
            ]
        },
        German1: {
            head: "Germane",
            image: { url: "../Images/German1.png", scale: 0.36, top: 12, left: 7 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊4" },
                { left: horzMargin, top: vertPower, color: red, content: "9" },
            ]
        },
        German2: {
            head: "Germane",
            image: { url: "../Images/German2.png", scale: 0.4, top: 15, left: 2.5 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊4" },
                { left: horzMargin, top: vertPower, color: red, content: "9" },
            ]
        },
        Boss0: {
            head: "Hunnenhauptmann",
            image: { url: "../Images/Boss0.png", scale: 0.37, top: 15, left: 6 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊5" },
                { left: horzMargin, top: vertPower, color: red, content: "12" },
            ]
        },
        Boss1: {
            head: "Räuberhauptmann",
            image: { url: "../Images/Boss1.png", scale: 0.38, top: 18, left: 6 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin, top: vertBase, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊5" },
                { left: horzMargin, top: vertPower, color: red, content: "12" },
            ]
        },
        Boss2: {
            head: "Germanenhauptmann",
            image: { url: "../Images/Boss2.png", scale: 0.37, top: 13.3, left: 6.4 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊5" },
                { left: horzMargin, top: vertPower, color: red, content: "12" },
            ]
        },
        Giant0: {
            head: "Rufus der Riese",
            image: { url: "../Images/Giant0.png", scale: 0.37, top: 14.5, left: 6.4 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊6" },
                { left: horzMargin, top: vertPower, color: red, content: "15" },
            ]
        },
        Giant1: {
            head: "Igor der Riese",
            image: { url: "../Images/Giant1.png", scale: 0.38, top: 14, left: 9 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin - 0.2, top: vertBase - 0.2, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊6" },
                { left: horzMargin, top: vertPower, color: red, content: "15" },
            ]
        },
        ShoWung: {
            head: "Sho-Wung",
            image: { url: "../Images/ShoWung.png", scale: 0.4, top: 12.3, left: 3.7 },
            markers: [
                { right: horzMargin, top: vertBase, color: yellow, content: "₊8" },
                { left: horzMargin, top: vertPower, color: red, content: "20" },
            ]
        },
        Warpig: {
            head: "Warpig",
            image: { url: "../Images/Warpig.png", scale: 0.4, top: 14.3, left: 6.1 },
            text: { content: poison },
            markers: [
                { left: horzMargin, top: vertBase, color: green, content: "˗1" },
                { left: horzMargin - 0.2, top: vertBase - 0.2, url: "../Images/Turn.svg", scale: 1 },
                { right: horzMargin, top: vertBase, color: yellow, content: "₊10" },
                { left: horzMargin, top: vertPower, color: red, content: "25" },
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
