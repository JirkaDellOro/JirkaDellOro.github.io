namespace SchatzjagdCards {
  // let card: HTMLDivElement;
  window.addEventListener("load", hndLoad);
  let offsetImage = { x: 2.5, y: 2.5 };

  function hndLoad(_event: Event): void {
    // createCards(enemies);
    // createCards(places);
    // createCards(potions);
    // createCards(weapons);
    // createCards(spells);
    // createCards(traps);
    // createMaps();

    // createCards(city, "city");

    // createCards(chests, "chest");
    // createSimple(12, "backchest");

    // createSimple(16, "back");
    createCards(rules, "cover");

    // createCards(addition);

    // createSimple(16, "poisonskip");
  }

  function createMaps(): void {
    let locations: string[] = ["A4", "F0", "E3", "J5", "E9", "C7", "F6", "D5", "C2", "H2", "H7", "G4"];
    for (let location of locations) {
      map["markers"][0]["content"] = location;
      let card: HTMLDivElement = createCard(map);
      document.body.appendChild(card)
    }
  }

  function createSimple(_count: number, _class: string = undefined): void {
    for (let i: number = 0; i < _count; i++) {
      let card: HTMLDivElement = document.createElement("div");
      card.className = _class;
      document.body.appendChild(card)
    }
  }

  function createCards(_list: Object, _class: string = undefined): void {
    for (let key in _list) {
      let cardData = _list[key];
      for (let copy: number = 0; copy < (cardData["count"] || 1); copy++) {
        let card: HTMLDivElement = createCard(cardData, _class);
        document.body.appendChild(card)
      }
    }
  }

  function createCard(_data: Object, _class: string = undefined): HTMLDivElement {
    let card: HTMLDivElement = document.createElement("div");
    let style: CSSStyleDeclaration = card.style;

    if (_class)
      card.className = _class;

    if (_data["background"])
      style.backgroundImage = `url("${_data["background"]}"`;
    if (_data["backgroundColor"])
      style.backgroundColor = `${_data["backgroundColor"]}`;

    let headline: HTMLHeadElement = document.createElement("h1");
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

  function createImage(_data: Object): HTMLImageElement {
    let image: HTMLImageElement = document.createElement("img");
    image.src = _data["url"];
    image.style.transform = `scale(${_data["scale"]})`;
    image.style.top = _data["top"] + offsetImage.x + "mm";
    image.style.left = _data["left"] + offsetImage.x + "mm";
    image.style.right = _data["right"] + "mm";
    image.style.bottom = _data["bottom"] + "mm";
    return image;
  }

  function createText(_data: Object): HTMLParagraphElement {
    let p: HTMLParagraphElement = document.createElement("p");
    p.innerHTML = _data["content"];
    console.log(_data["content"]);
    return p;
  }

  function createMarker(_marker: Object): HTMLSpanElement | HTMLImageElement {
    if (_marker["url"]) {
      return (createImage(_marker));
    }
    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = _marker["content"];
    span.style.backgroundColor = _marker["color"];
    if (_marker["color"] == transparent)
      span.style.borderWidth = "0mm";
    span.style.top = _marker["top"] + "mm";
    span.style.right = _marker["right"] + "mm";
    span.style.left = _marker["left"] + "mm";

    span.className= _marker["class"];

    return span;
  }
}