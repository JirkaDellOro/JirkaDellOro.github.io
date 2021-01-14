var SchatzjagdCards;
(function (SchatzjagdCards) {
    let red = "#ff0404";
    let green = "#01ff1f";
    let blue = "#04a3ff";
    let yellow = "#ffd22a";
    SchatzjagdCards.transparent = "#00000000";
    let xMargin = 4.5;
    let yBase = 50;
    let yType = 17;
    let offset = 7;
    // let horzCenterLeft: number = 18.5;
    let poison = "Wird dein Scherge<br/>getroffen, ist er vergiftet!";
    let theft = "Flieht dein Scherge,<br/>halbiert sich seine<br/>Guldenzahl! (abrunden)";
    // let theft: string = "Flieht dein Scherge,<br/>verschwindet die Hälfte<br/>seines Goldes (abrunden)";
    // let theft: string = "Stiehlt die Hälfte<br/>des Goldes (abrunden),<br>deines Schergen bei Flucht";
    // ÷ ½ × ˗ ˖ ₊ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ↻ ⟳ ⌂ ⚕ ⚗️ ⚔️ 🏚️ 🧪 🏠 📍 🚩 📌 🚩 📜 🕮 🖹
    // ⛤⛧ ⚐ 🗲 ❌ ☠ 💀 🕱
    SchatzjagdCards.addition = {
        Blank: {
            count: 6,
            head: "&nbsp;",
            markers: [
                { left: xMargin, top: yType, color: "white", content: "" },
                { left: xMargin, top: yBase - 1.0 * offset, color: "white", content: "" },
                { right: xMargin, top: yBase - 1.0 * offset, color: "white", content: "" },
            ]
        },
    };
    SchatzjagdCards.rules = {
        RulesFront: {
            count: 12,
            head: "",
            background: "Cover/CoverCity.svg",
            text: {
                content: `<ol>
      <li style="list-style: upper-roman;">Die Reise des Schergen</li><ul> 
        <li>Willst Du ihn ziehen,<br/> 
        so würfle und bewege ihn<br/> 
        maximal die Augenzahl<br/> 
        beliebig über freie Felder<br/> 
        aber nicht diagonal.</li> 
        <li>Stopp bei Karte oder Scherge,<br/> 
        außer in der Stadt, dafür aber<br/> 
        vor Stadtmauer beim Betreten.</li> 
        <li>Karte erreicht? Aufdecken!</li> 
        </ul> 
      <li style="list-style: upper-roman;">Der Einfluss des Fürsten</li><ul> 
        <li>Karte ausspielen (zwingend<br/> 
        bei mehr als 4 Handkarten)</li> 
        <li>Nachziehen auf 4 Handkarten.</li> 
      </ul> 
      <li value="1">In der Stadt </li> 
        <table> 
        <tr><td style="background-color:${yellow}; width:1em;">&nbsp;</td> 
        <td>pro Tag</td><td></td><td>→ +2 Gulden</td></tr> 
        <tr><td style="background-color:${red}; width:1em;">&nbsp;</td> 
        <td>pro Tag</td><td>-3 Gulden</td><td>→ +1 Stärke</td></tr> 
        <tr><td style="background-color:${blue}; width:1em;">&nbsp;</td> 
        <td></td><td>-x Gulden</td><td>→ +x Waffen</td></tr> 
        <tr><td rowspan="2" style="background-color:${green}; width:1em;">&nbsp;</td> 
        <td></td><td>-x Gulden</td><td>→ +x•3 Leben</td></tr> 
        <tr> 
        <td></td><td>-5 Gulden</td><td>→ Entgiftung</td></tr> 
        </table> 
        <ul><li>Kampf ist untersagt!</li></ul> 
      </ol> 
      `
            },
        },
        RulesBack: {
            count: 12,
            head: "",
            background: "Cover/CoverSword.svg",
            text: {
                content: `<ol start='2'>
        <li>Karten ausspielen</li><ul> 
          <li>Karten nur im eigenen Zug und<br/> 
          nur eine Karte pro Zug spielen.</li> 
          <li>In ein freies Feld einstecken,<br/> 
          oder zeigen wenn <span class="text" style="background-color: black; color: white;">⛤</span> 
          oder <span class="text" style="background-color: black; color: white;">Xy</span>.</li> 
          <li><strong><span class="text" style="background-color: black; color: white;">⛤</span> im Schergenzug spielbar</strong></li> 
          <li>Schatz ablegen nur möglich<br/> 
          wenn Scherge in Burg ist,<br/> 
          gilt als ausgespielte Karte.</li> 
        </ul> 
        <li>Karten aufdecken</li><ul> 
          <li><span class="text" style="background-color:${red};">&nbsp;</span> greift sofort an.</li> 
          <li><span class="text">⚔</span>, <span class="text">⚕</span>, <span class="text">🗲</span> wirken sofort.</li> 
          <li><span class="text">⌂</span> kann wirken, muss nicht.</li> 
          <li><span class="text">⛤</span> und <span class="text">Xy</span> aufnehmen.</li> 
        </ul> 
          <li>Schlagabtausch im Kampf</li><ul>
          <li>Härte = Stärke+Waffen+Würfel.</li>
          <li>Getroffen wenn Härte geringer.</li>
          <li>Schaden an Leben des<br/>
          Getroffenen = Härtedifferenz.</li>
          <li>Je einen Waffenpunkt abziehen.</li>
          <li>Schlagabtausch bis Tod/Flucht.</li>
          <li>Flucht: kein Würfel zum Schutz.</li>
        </ul>
    </ol> 
  `
            },
        }
    };
    SchatzjagdCards.chests = {
        Crown: {
            count: 4,
            head: " ",
            background: "Chest/ChestFront.svg",
            image: { url: "Images/Treasure_Crown.png", scale: 0.4, top: 20, left: 5 },
        },
        Orb: {
            count: 4,
            head: " ",
            background: "Chest/ChestFront.svg",
            image: { url: "Images/Treasure_Orb.png", scale: 0.4, top: 19, left: 7 },
        },
        Chalice: {
            count: 4,
            head: " ",
            background: "Chest/ChestFront.svg",
            image: { url: "Images/Treasure_Chalice.png", scale: 0.4, top: 22, left: 5 },
        },
    };
    SchatzjagdCards.city = {
        Tavern: {
            count: 4,
            head: "Gasthaus",
            background: "City/CityBackTall.svg",
            backgroundColor: yellow,
            image: { url: "Images/City_Tavern.png", scale: 0.4, top: 27, left: 7 },
            text: { content: "2 Gulden pro Runde<br/>für's Tellerwaschen!<br/><br/>" },
            markers: [
                { right: xMargin, top: yBase + 0.5 * offset, color: yellow, content: "+2" },
                { left: xMargin, top: yBase + 0.5 * offset, color: "white", content: "1" },
                { left: xMargin, top: yBase + 0.5 * offset, url: "Images/Turn.svg", scale: 1 },
                { left: xMargin + 1 + 1.5 * offset, top: yBase + 1 * offset, url: "Images/Arrow.svg", scale: 1 },
            ]
        },
        Healer: {
            count: 4,
            head: "Heiler",
            background: "City/CityBackTall.svg",
            backgroundColor: green,
            image: { url: "Images/City_Healer.png", scale: 0.35, top: 28, left: 7 },
            text: { content: "Heilt oder entgiftet!<br/><br/>" },
            markers: [
                { right: xMargin, top: yBase + 1.0 * offset, color: green, content: "+3" },
                { right: xMargin, top: yBase + 0.0 * offset, color: green, content: "-0" },
                { right: xMargin - 1, top: yBase + 0.0 * offset, url: "Images/Turn.svg", scale: 1 },
                { left: xMargin, top: yBase + 1.0 * offset, color: yellow, content: "-1" },
                { left: xMargin, top: yBase + 0.0 * offset, color: yellow, content: "-5" },
                { left: xMargin + 1 + 1.5 * offset, top: yBase + 0.5 * offset, url: "Images/Arrow.svg", scale: 1 },
                { left: xMargin + 1 + 1.5 * offset, top: yBase + 1.5 * offset, url: "Images/Arrow.svg", scale: 1 },
            ]
        },
        Gym: {
            count: 4,
            head: "Schule",
            background: "City/CityBackTall.svg",
            backgroundColor: red,
            image: { url: "Images/City_Gym.png", scale: 0.35, top: 30, left: 8 },
            text: { content: "Täglich maximal<br/> ein Krafttraining<br/>für 3 Gulden!<br/><br/>" },
            markers: [
                { right: xMargin, top: yBase + 0.5 * offset, color: red, content: "+1" },
                { left: xMargin, top: yBase + 0.5 * offset, color: yellow, content: "-3" },
                { left: xMargin, top: yBase + 0.5 * offset, url: "Images/Turn.svg", scale: 1 },
                { left: xMargin + 1 + 1.5 * offset, top: yBase + 1.0 * offset, url: "Images/Arrow.svg", scale: 1 },
            ]
        },
        Forge: {
            count: 4,
            head: "Schmied",
            background: "City/CityBackTall.svg",
            backgroundColor: blue,
            image: { url: "Images/City_Forge.png", scale: 0.35, top: 30, left: 8 },
            text: { content: "Fertigt feinste Waffen!<br/><br/>" },
            markers: [
                { right: xMargin, top: yBase + 0.5 * offset, color: blue, content: "+1" },
                { left: xMargin, top: yBase + 0.5 * offset, color: yellow, content: "-1" },
                { left: xMargin + 1 + 1.5 * offset, top: yBase + 1 * offset, url: "Images/Arrow.svg", scale: 1 },
            ]
        },
    };
    SchatzjagdCards.map = {
        count: 1,
        head: "Lageplan",
        image: { url: "Images/Map.png", scale: 0.45, top: 23, left: 7 },
        text: { content: "Zeige diese Karte vor,<br/>wenn dein Scherge auf<br/>dem angegebenen Feld<br/>steht, um einen Schatz<br/>zu heben." },
        markers: [
            { left: xMargin, top: yType, color: "black", content: "", class: "instant" },
        ]
    };
    SchatzjagdCards.traps = {
        Skip: {
            count: 4,
            head: "Versklavt",
            image: { url: "Images/Skip.png", scale: 0.45, top: 20, left: 9 },
            text: { content: "Die nächste Runde<br/>setzt Du aus!" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "🗲" },
                { left: xMargin, top: yBase, color: "grey", content: "" },
                { left: xMargin - 0.4, top: yBase + 1.5, color: SchatzjagdCards.transparent, content: "❌" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
            ]
        },
        Poison: {
            count: 4,
            head: "Vergiftet",
            image: { url: "Images/Poison.png", scale: 0.4, top: 18, left: 11 },
            text: { content: "Am Ende<br/>jedes Tages<br/>verliert dein Scherge<br/>Lebenskraft!" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "🗲" },
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
            ]
        },
        Switch: {
            count: 2,
            head: "Verwechselt",
            image: { url: "Images/Switch.png", scale: 0.4, top: 18, left: 11 },
            text: { content: "Der Mob lyncht<br/>deinen Schergen...<br/>eine Weile.<br/> Er verliert<br/>die Hälfte<br/>seiner Lebenskraft!<br/>(abrunden)" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "🗲" },
                { left: xMargin, top: yBase, color: green, content: "÷2" },
            ]
        },
        Pikes: {
            count: 2,
            head: "Verstolpert",
            image: { url: "Images/Pikes.png", scale: 0.51, top: 21, left: 5.9 },
            text: { content: "Dein Scherge<br/>verliert fünf Punkte<br/>seiner Lebenskraft!" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "🗲" },
                { left: xMargin, top: yBase - 0 * offset, color: green, content: "-5" },
            ]
        },
        Theft: {
            count: 2,
            head: "Verschlafen",
            image: { url: "Images/Theft.png", scale: 0.4, top: 19, left: 7 },
            text: { content: "Deinem Schergen<br/>wird jede<br/>zweite Waffe<br/>gestohlen!<br/>(abrunden)" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "🗲" },
                { left: xMargin, top: yBase, color: blue, content: "÷2" },
            ]
        },
        Snakes: {
            count: 2,
            head: "Verschlungen",
            image: { url: "Images/Snakes.png", scale: 0.45, top: 18, left: 7 },
            text: { content: "Die Hälfte<br/>seiner Stärke<br/>verlässt deinen Schergen!<br/>(abrunden)" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "🗲" },
                { left: xMargin, top: yBase, color: red, content: "÷2" },
            ]
        },
    };
    SchatzjagdCards.spells = {
        Stun: {
            count: 4,
            head: "Lähmung",
            image: { url: "Images/Stun.png", scale: 0.40, top: 16, left: 9 },
            text: { content: "Setzt den Gegner<br/>im Kampf für<br/>einen Schlagabtausch<br/>außer Gefecht!" },
            markers: [
                { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
            ]
        },
        Earthquake: {
            count: 4,
            head: "Erdbeben",
            image: { url: "Images/Earthquake.png", scale: 0.38, top: 17.7, left: 7.4 },
            text: { content: "Fegt eine Karte von<br/>einem beliebigen Feld.<br/>Funktioniert nicht gegen<br/>Stadt, Schätze und<br/>Felder auf denen<br/>Schergen stehen!" },
            markers: [
                { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
            ]
        },
        ThirdEye: {
            count: 4,
            head: "Das Dritte Auge",
            image: { url: "Images/ThirdEye.png", scale: 0.45, top: 17.7, left: 6.8 },
            text: { content: "Zeigt dir die Karten<br/>der Nachbarfelder<br/>deines Schergen.<br/>Es kann nicht<br/>diagonal schauen." },
            markers: [
                { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
            ]
        },
        Crystal: {
            count: 1,
            head: "Kristallkugel",
            image: { url: "Images/Crystal.png", scale: 0.45, top: 16.7, left: 11.8 },
            text: { content: "Schaue in die Karten<br/>eines Mitspielers und<br/>suche dir eine aus,<br/>aber keinen Schatz.<br/>Der Bestohlene<br/>zieht vom Stapel nach." },
            markers: [
                { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
            ]
        },
        Teleport: {
            count: 1,
            head: "Teleportation",
            image: { url: "Images/Teleport.png", scale: 0.35, top: 16, left: 9.7 },
            text: { content: "Bringt sofort<br/>einen beliebigen Schergen<br/>auf ein beliebiges Feld!<br/>Liegt dort eine Karte<br/>so muss er sie in<br/>seinem Zug aufdecken." },
            markers: [
                { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
            ]
        },
    };
    SchatzjagdCards.weapons = {
        Knife: {
            count: 6,
            head: "Messer",
            image: { url: "Images/Knife.png", scale: 0.55, top: 27, left: 10 },
            markers: [
                { right: xMargin, top: yBase, color: blue, content: "+1" },
                { left: xMargin, top: yType, color: "white", content: "⚔" },
            ]
        },
        Dagger: {
            count: 5,
            head: "Dolch",
            image: { url: "Images/Dagger.png", scale: 0.55, top: 21, left: 10 },
            markers: [
                { right: xMargin, top: yBase, color: blue, content: "+2" },
                { left: xMargin, top: yType, color: "white", content: "⚔" },
            ]
        },
        Spear: {
            count: 4,
            head: "Speer",
            image: { url: "Images/Spear.png", scale: 0.55, top: 21, left: 8 },
            markers: [
                { right: xMargin, top: yBase, color: blue, content: "+3" },
                { left: xMargin, top: yType, color: "white", content: "⚔" },
            ]
        },
        Sword: {
            count: 3,
            head: "Schwert",
            image: { url: "Images/Sword.png", scale: 0.5, top: 23, left: 7 },
            markers: [
                { right: xMargin, top: yBase, color: blue, content: "+4" },
                { left: xMargin, top: yType, color: "white", content: "⚔" },
            ]
        },
        Mace: {
            count: 2,
            head: "Morgenstern",
            image: { url: "Images/Mace.png", scale: 0.55, top: 19, left: 7 },
            markers: [
                { right: xMargin, top: yBase, color: blue, content: "+5" },
                { left: xMargin, top: yType, color: "white", content: "⚔" },
            ]
        },
        Axe: {
            count: 1,
            head: "Streitaxt",
            image: { url: "Images/Axe.png", scale: 0.55, top: 17, left: 7 },
            markers: [
                { right: xMargin, top: yBase, color: blue, content: "+6" },
                { left: xMargin, top: yType, color: "white", content: "⚔" },
            ]
        },
    };
    SchatzjagdCards.potions = {
        Detox: {
            count: 2,
            head: "Entgiftung",
            image: { url: "Images/Detox.png", scale: 0.35, top: 15, left: 11 },
            text: { content: "Achtung: Entgiftung<br/>ist keine Heilung..." },
            markers: [
                { right: xMargin, top: yBase, color: green, content: "-0" },
                { right: xMargin - 1, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { left: xMargin, top: yType, color: "white", content: "⚕" },
            ]
        },
        Heal: {
            count: 4,
            head: "Heilung",
            image: { url: "Images/Heal.png", scale: 0.45, top: 22, left: 4 },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⚕" },
                { right: xMargin, top: yBase, color: green, content: "15" },
            ]
        },
        Power0: {
            count: 3,
            head: "Stärkeelixier",
            image: { url: "Images/Power0.png", scale: 0.4, top: 22, left: 9 },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⚕" },
                { right: xMargin, top: yBase, color: red, content: "+1" },
            ]
        },
        Power1: {
            count: 2,
            head: "Superkraft",
            image: { url: "Images/Power1.png", scale: 0.4, top: 22, left: 8 },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⚕" },
                { right: xMargin, top: yBase, color: red, content: "+2" },
            ]
        }
    };
    SchatzjagdCards.places = {
        Casino: {
            head: "Casino",
            image: { url: "Images/Casino.png", scale: 0.35, top: 15, left: 11 },
            text: { content: "Spiele einfaches Roulette.<br/>Setze maximal<br/>3x pro Runde auf<br/>Pair oder Impair<br/>und würfle,<br/>um deinen<br/>Einsatz zu<br/>verdoppeln oder<br/>zu verlieren." },
            markers: [
                { right: xMargin, top: yBase, color: yellow, content: "+" },
                { left: xMargin, top: yBase, color: yellow, content: "-" },
                { left: xMargin, top: yType, color: "white", content: "⌂" },
            ]
        },
        DragonsLair: {
            head: "Drachenhöhle",
            image: { url: "Images/DragonsLair.png", scale: 0.35, top: 15, left: 9.5 },
            text: { content: "Schickst<br/>Du deinen<br/>Schergen hinein,<br/>würfle sein Schicksal!" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
                { right: xMargin, top: yBase - 2 * offset, color: red, content: "+1" },
                { right: xMargin, top: yBase - 1 * offset, color: yellow, content: "+3" },
                { right: xMargin, top: yBase + 0 * offset, color: green, content: "+5" },
                { left: xMargin, top: yBase - 2 * offset, color: green, content: "-5" },
                { left: xMargin, top: yBase - 1 * offset, color: red, content: "-1" },
                { left: xMargin, top: yBase + 0 * offset, color: green, content: "🕱", class: "skull" },
                { left: 0.8, top: 34, url: "Images/DragonDice.svg" },
            ]
        },
        Teleportal: {
            count: 2,
            head: "Teleportal",
            image: { url: "Images/Teleportal.png", scale: 0.35, top: 15, left: 9.5 },
            // text: { content: "Schickt deinen Schergen<br/>auf ein beliebiges<br/>freies Feld<br/>im zufälligen Zielland!" },
            text: { content: "Würfle, und dein Scherge<br/>erscheint (evt.) auf einem<br/>beliebigen Feld<br/>im zufälligen Zielland!" },
            markers: [
                { left: xMargin, top: yBase - 1.5 * offset, color: green, content: "🕱", class: "skull" },
                { left: xMargin, top: yType, color: "white", content: "⌂" },
                { left: 11, top: 36, url: "Images/Teleportal.svg" },
            ]
        },
        Rumpelstilz: {
            head: "Rumpelstilz",
            image: { url: "Images/Rumpelstilz.png", scale: 0.35, top: 20, left: 9.5 },
            text: { content: "Gelingt es dir,<br/>eine Zahl zu nennen<br/>und sie daraufhin<br/>zu würfeln, erhältst<br/>Du 6 Gulden!" },
            markers: [
                { right: xMargin, top: yBase - 0 * offset, color: yellow, content: "+6" },
                { left: xMargin, top: yType, color: "white", content: "⌂" },
            ]
        },
        Elf: {
            head: "Elf, der Wegweiser",
            image: { url: "Images/Elf.png", scale: 0.35, top: 20, left: 8.5 },
            text: { content: "Voller Hilfsbereitschaft<br/>zeigt dir der Elf<br/>eine beliebige Karte<br/>im Reich!" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
            ]
        },
        Dealer: {
            count: 2,
            head: "Handelspriester",
            image: { url: "Images/Dealer.png", scale: 0.4, top: 17, left: 7.5 },
            text: { content: "Die obersten Karten<br/>des Nachziehstapels<br/>kommen für je 2 Gulden<br/>auf deine Hand." },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
                { left: xMargin, top: yBase - 1 * offset, color: yellow, content: "-2" },
            ]
        },
        Tornado: {
            head: "Wirbelsturm",
            image: { url: "Images/Tornado.png", scale: 0.4, top: 17, left: 7.5 },
            text: { content: "Jeder Spieler zieht von<br/>seinem rechten Nachbarn<br/>gleichzeitig eine Karte,<br/>...auch Schätze!<br/>Dann legt sich der Sturm<br/>auf den Ablagestapel." },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
            ]
        },
        Arena: {
            head: "Gladiatorenarena",
            image: { url: "Images/Arena.png", scale: 0.45, top: 15.5, left: 8 },
            text: { content: "Forderst Du<br/>einen Schergen heraus,<br/>wird er sofort<br/>zum Zweikampf<br/>hierher teleportiert.<br/>Danach stürzt<br/>die Arena ein" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
            ]
        },
        Horse: {
            count: 3,
            head: "Pferdestall",
            image: { url: "Images/Stable.png", scale: 0.12, top: 22, left: 7 },
            text: { content: "Leihe ein Pferd<br/>für einen Gulden<br/>und würfle gleich nochmal,<br/>um deinen Schergen</br>weiter voran zu bringen" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
                { left: xMargin, top: yBase - 1.0 * offset, color: yellow, content: "-1" },
            ]
        },
        Shadow: {
            count: 1,
            head: "Meisterdieb",
            image: { url: "Images/Thief.png", scale: 0.18, top: 20, left: 10 },
            text: { content: "Zahle 5 Gulden</br>und wähle einen Spieler</br>mit Schatz auf der Hand.</br>Würfelt er weniger als fünf,</br>erhältst Du den Schatz!" },
            markers: [
                { left: xMargin, top: yType, color: "white", content: "⌂" },
                { left: xMargin, top: yBase - 1.0 * offset, color: yellow, content: "-5" },
            ]
        },
    };
    SchatzjagdCards.enemies = {
        Robber01: {
            count: 2,
            head: "Räuber",
            image: { url: "Images/Hun2.png", scale: 0.38, top: 21.2, left: 10 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+3" },
                { left: xMargin, top: yType, color: "white", content: "2" },
            ]
        },
        Robber02: {
            count: 2,
            head: "Räuber",
            image: { url: "Images/Robber0.png", scale: 0.4, top: 23, left: 9 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+3" },
                { left: xMargin, top: yType, color: "white", content: "2" },
            ]
        },
        Rogue01: {
            count: 2,
            head: "Assassine",
            image: { url: "Images/Hun3v.png", scale: 0.35, top: 21.2, left: 11 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+3" },
                { left: xMargin, top: yType, color: "white", content: "3" },
            ]
        },
        Rogue02: {
            count: 2,
            head: "Assassine",
            image: { url: "Images/Hun4v.png", scale: 0.36, top: 18.2, left: 2 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+3" },
                { left: xMargin, top: yType, color: "white", content: "3" },
            ]
        },
        Warrior01: {
            count: 4,
            head: "Freischärler",
            image: { url: "Images/Hun1.png", scale: 0.35, top: 21.2, left: 13.2 },
            markers: [
                // { left: horzMargin, top: vertBase, color: yellow, content: "0" },
                { right: xMargin, top: yBase, color: yellow, content: "+3" },
                { left: xMargin, top: yType, color: "white", content: "4" },
            ]
        },
        Robber11: {
            count: 1,
            head: "Räuber",
            image: { url: "Images/Robber1.png", scale: 0.4, top: 20, left: 2 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+4" },
                { left: xMargin, top: yType, color: "white", content: "5" },
            ]
        },
        Robber12: {
            count: 1,
            head: "Räuber",
            image: { url: "Images/Robber2.png", scale: 0.4, top: 22, left: 2 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+4" },
                { left: xMargin, top: yType, color: "white", content: "5" },
            ]
        },
        Robber13: {
            count: 1,
            head: "Räuber",
            image: { url: "Images/Robber3.png", scale: 0.4, top: 19, left: 7 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+4" },
                { left: xMargin, top: yType, color: "white", content: "5" },
            ]
        },
        Rogue11: {
            count: 3,
            head: "Assassine",
            image: { url: "Images/Hun5v.png", scale: 0.38, top: 17, left: 9 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+4" },
                { left: xMargin, top: yType, color: "white", content: "6" },
            ]
        },
        Warrior11: {
            count: 3,
            head: "Freischärler",
            image: { url: "Images/Hun0.png", scale: 0.35, top: 21.2, left: 11 },
            markers: [
                { right: xMargin, top: yBase, color: yellow, content: "+4" },
                { left: xMargin, top: yType, color: "white", content: "7" },
            ]
        },
        Robber21: {
            count: 2,
            head: "Räuber",
            image: { url: "Images/German1.png", scale: 0.36, top: 16, left: 7 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+5" },
                { left: xMargin, top: yType, color: "white", content: "8" },
            ]
        },
        Rogue21: {
            count: 2,
            head: "Assassine",
            image: { url: "Images/German2.png", scale: 0.4, top: 19, left: 2.5 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+5" },
                { left: xMargin, top: yType, color: "white", content: "9" },
            ]
        },
        Warrior21: {
            count: 2,
            head: "Freischärler",
            image: { url: "Images/German0.png", scale: 0.34, top: 24, left: 9 },
            markers: [
                { right: xMargin, top: yBase, color: yellow, content: "+5" },
                { left: xMargin, top: yType, color: "white", content: "10" },
            ]
        },
        Robber31: {
            head: "Räuberhauptmann",
            image: { url: "Images/Boss1.png", scale: 0.38, top: 22, left: 6 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+6" },
                { left: xMargin, top: yType, color: "white", content: "11" },
            ]
        },
        Rogue31: {
            head: "Assassinenchef",
            image: { url: "Images/Boss0.png", scale: 0.37, top: 17, left: 6 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+6" },
                { left: xMargin, top: yType, color: "white", content: "12" },
            ]
        },
        Warrior31: {
            head: "Freischar-Oberst",
            image: { url: "Images/Boss2.png", scale: 0.37, top: 17.3, left: 6.4 },
            markers: [
                { right: xMargin, top: yBase, color: yellow, content: "+6" },
                { left: xMargin, top: yType, color: "white", content: "13" },
            ]
        },
        Giant1: {
            head: "Riesenräuber",
            image: { url: "Images/Giant0.png", scale: 0.37, top: 17, left: 6.4 },
            text: { content: theft },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "÷2" },
                { right: xMargin, top: yBase, color: yellow, content: "+8" },
                { left: xMargin, top: yType, color: "white", content: "14" },
            ]
        },
        Giant2: {
            head: "Assasinen-Titan",
            image: { url: "Images/Giant1.png", scale: 0.38, top: 17, left: 9 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+8" },
                { left: xMargin, top: yType, color: "white", content: "15" },
            ]
        },
        ShoWung: {
            head: "Sho-Wung",
            image: { url: "Images/ShoWung.png", scale: 0.4, top: 15.3, left: 3.7 },
            text: { content: poison },
            markers: [
                { left: xMargin, top: yBase, color: green, content: "-1" },
                { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
                { right: xMargin, top: yBase, color: yellow, content: "+10" },
                { left: xMargin, top: yType, color: "white", content: "17" },
            ]
        },
        Warpig: {
            head: "Warpig",
            image: { url: "Images/Warpig.png", scale: 0.42, top: 19, left: 6.1 },
            text: { content: "Flieht dein Scherge,<br/>verliert er alle Gulden!" },
            markers: [
                { left: xMargin, top: yBase, color: yellow, content: "0" },
                { right: xMargin, top: yBase, color: yellow, content: "+15" },
                { left: xMargin, top: yType, color: "white", content: "20" },
            ]
        },
    };
})(SchatzjagdCards || (SchatzjagdCards = {}));
