var SchatzjagdCards;
(function (SchatzjagdCards) {
    let card;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        for (let key in SchatzjagdCards.data) {
            let cardData = SchatzjagdCards.data[key];
            card = createCard(cardData);
        }
    }
    function createCard(_data) {
        let card = document.createElement("div");
        let style = card.style;
        if (_data["background"])
            style.backgroundImage = `url("${_data["background"]}"`;
        let headline = document.createElement("h1");
        headline.textContent = _data["head"] || "................";
        card.appendChild(headline);
        if (_data["image"])
            card.appendChild(createImage(_data["image"]));
        // if (_data["text"])
        //   card.appendChild(createText(_data["text"]));
        document.body.appendChild(card);
        return card;
    }
    function createImage(_data) {
        let image = document.createElement("img");
        image.src = _data["url"];
        image.style.transform = `scale(${_data["scale"]})`;
        image.style.top = _data["top"] + "mm";
        image.style.left = _data["left"] + "mm";
        return image;
    }
    function createText(_data) {
        let span = document.createElement("span");
        span.textContent = _data["content"];
        // span.style.top = _data["top"] + "mm";
        // span.style.left = _data["left"] + "mm";
        return span;
    }
})(SchatzjagdCards || (SchatzjagdCards = {}));
