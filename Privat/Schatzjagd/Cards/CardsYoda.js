var SchatzjagdCards;
(function (SchatzjagdCards) {
    // let card: HTMLDivElement;
    window.addEventListener("load", hndLoad);
    let offsetImage = { x: 2.5, y: 2.5 };
    function hndLoad(_event) {
        createCards(SchatzjagdCards.enemies);
        createCards(SchatzjagdCards.places);
        createCards(SchatzjagdCards.potions);
        createCards(SchatzjagdCards.weapons);
        createCards(SchatzjagdCards.spells);
        createCards(SchatzjagdCards.traps);
        createMaps();
        // createCards(city, "city");
        // createCards(chests, "chest");
        // createSimple(12, "backchest");
        // createSimple(12, "cover");
        // createCards(rules, "cover");
        createCards(SchatzjagdCards.addition);
        // createSimple(16, "back");
        convertToYodaPrint();
    }
    function createMaps() {
        let locations = ["A4", "F0", "E3", "J5", "E9", "C7", "F6", "D5", "C2", "H2", "H7", "G4"];
        for (let location of locations) {
            SchatzjagdCards.map["markers"][0]["content"] = location;
            let card = createCard(SchatzjagdCards.map);
            document.body.appendChild(card);
        }
    }
    function createSimple(_count, _class = undefined) {
        for (let i = 0; i < _count; i++) {
            let card = document.createElement("div");
            card.className = _class;
            document.body.appendChild(card);
        }
    }
    function createCards(_list, _class = undefined) {
        for (let key in _list) {
            let cardData = _list[key];
            for (let copy = 0; copy < (cardData["count"] || 1); copy++) {
                let card = createCard(cardData, _class);
                document.body.appendChild(card);
            }
        }
    }
    function createCard(_data, _class = undefined) {
        let card = document.createElement("div");
        let style = card.style;
        if (_class)
            card.className = _class;
        if (_data["background"])
            style.backgroundImage = `url("${_data["background"]}"`;
        if (_data["backgroundColor"])
            style.backgroundColor = `${_data["backgroundColor"]}`;
        let headline = document.createElement("h1");
        headline.innerHTML = _data["head"];
        card.appendChild(headline);
        if (_data["background"] == "City/CityBack.svg")
            headline.style.paddingTop = "2mm";
        if (_data["image"])
            card.appendChild(createImage(_data["image"]));
        if (_data["text"])
            card.appendChild(createText(_data["text"]));
        if (_data["markers"])
            for (let marker of _data["markers"])
                card.appendChild(createMarker(marker));
        return card;
    }
    function createImage(_data) {
        let image = document.createElement("img");
        image.src = _data["url"];
        image.style.transform = `scale(${_data["scale"]})`;
        image.style.top = _data["top"] + offsetImage.x + "mm";
        image.style.left = _data["left"] + offsetImage.x + "mm";
        image.style.right = _data["right"] + "mm";
        image.style.bottom = _data["bottom"] + "mm";
        return image;
    }
    function createText(_data) {
        let p = document.createElement("p");
        p.innerHTML = _data["content"];
        console.log(_data["content"]);
        return p;
    }
    function createMarker(_marker) {
        if (_marker["url"]) {
            return (createImage(_marker));
        }
        let span = document.createElement("span");
        span.innerHTML = _marker["content"];
        span.style.backgroundColor = _marker["color"];
        if (_marker["color"] == SchatzjagdCards.transparent)
            span.style.borderWidth = "0mm";
        span.style.top = _marker["top"] + "mm";
        span.style.right = _marker["right"] + "mm";
        span.style.left = _marker["left"] + "mm";
        span.className = _marker["class"];
        return span;
    }
    function convertToYodaPrint() {
        let cards = document.querySelectorAll("div");
        for (let index = 0; index < cards.length;) {
            let section = document.createElement("section");
            document.body.appendChild(section);
            for (let row = 0; row < 4; row++) {
                let card = cards[index++];
                for (let column = 0; column < 9; column++) {
                    section.appendChild(card);
                    card = card.cloneNode(true);
                }
            }
            section = document.createElement("section");
            document.body.appendChild(section);
            for (let row = 0; row < 4; row++) {
                for (let column = 0; column < 9; column++) {
                    let card = document.createElement("div");
                    card.className = "back";
                    section.appendChild(card);
                }
            }
        }
    }
})(SchatzjagdCards || (SchatzjagdCards = {}));
