var SchatzjagdCards;
(function (SchatzjagdCards) {
    let card;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        createCards(SchatzjagdCards.enemy);
    }
    function createCards(_list) {
        for (let key in _list) {
            let cardData = _list[key];
            card = createCard(cardData);
            document.body.appendChild(card);
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
        image.style.top = _data["top"] + "mm";
        image.style.left = _data["left"] + "mm";
        return image;
    }
    function createText(_data) {
        let span = document.createElement("p");
        span.innerHTML = _data["content"];
        console.log(_data["content"]);
        return span;
    }
    function createMarker(_marker) {
        if (_marker["url"]) {
            return (createImage(_marker));
        }
        let span = document.createElement("span");
        span.innerHTML = _marker["content"];
        span.style.backgroundColor = _marker["color"];
        span.style.top = _marker["top"] + "mm";
        span.style.right = _marker["right"] + "mm";
        span.style.left = _marker["left"] + "mm";
        return span;
    }
})(SchatzjagdCards || (SchatzjagdCards = {}));
