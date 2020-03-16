namespace SchatzjagdCards {
  let card: HTMLDivElement;
  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    for (let key in data) {
      let cardData = data[key];
      card = createCard(cardData);
    }
  }

  function createCard(_data: Object): HTMLDivElement {
    let card: HTMLDivElement = document.createElement("div");
    let style: CSSStyleDeclaration = card.style;

    if (_data["background"])
      style.backgroundImage = `url("${_data["background"]}"`;

    let headline: HTMLHeadElement = document.createElement("h1");
    headline.textContent = _data["head"] || "................";
    card.appendChild(headline);

    if (_data["image"])
      card.appendChild(createImage(_data["image"]));

    if (_data["text"])
      card.appendChild(createText(_data["text"]));

    if (_data["markers"])
      for (let marker of _data["markers"])
        card.appendChild(createMarker(marker));

    document.body.appendChild(card)
    return card;
  }

  function createImage(_data: Object): HTMLImageElement {
    let image: HTMLImageElement = document.createElement("img");
    image.src = _data["url"];
    image.style.transform = `scale(${_data["scale"]})`;
    image.style.top = _data["top"] + "mm";
    image.style.left = _data["left"] + "mm";
    return image;
  }

  function createText(_data: Object): HTMLParagraphElement {
    let span: HTMLParagraphElement = document.createElement("p");
    span.innerHTML = _data["content"];
    console.log(_data["content"]);
    return span;
  }

  function createMarker(_marker: Object): HTMLSpanElement {
    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = _marker["content"];
    console.log(_marker["content"]);
    return span;
  }
}