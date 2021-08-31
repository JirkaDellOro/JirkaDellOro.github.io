namespace SchatzjagdCards_en {
// namespace SchatzjagdCards {
  let red: string = "#ff0404";
  let green: string = "#01ff1f";
  let blue: string = "#04a3ff";
  let yellow: string = "#ffd22a";
  export let transparent: string = "#00000000";
  let xMargin: number = 4.5;
  let yBase: number = 50;
  let yType: number = 17;
  let offset: number = 7;
  // let horzCenterLeft: number = 18.5;

  let poison: string = "One injury, and your<br/>henchman is poisened!";
  let theft: string = "Flee, and you will<br/>lose half your money!<br/>(round down result)";
  // let theft: string = "Flieht dein Scherge,<br/>verschwindet die Hälfte<br/>seines Goldes (abrunden)";
  // let theft: string = "Stiehlt die Hälfte<br/>des Goldes (abrunden),<br>deines Schergen bei Flucht";
  // ÷ ½ × ˗ ˖ ₊ ⚀ ⚁ ⚂ ⚃ ⚄ ⚅ ↻ ⟳ ⌂ ⚕ ⚗️ ⚔️ 🏚️ 🧪 🏠 📍 🚩 📌 🚩 📜 🕮 🖹
  // ⛤⛧ ⚐ 🗲 ❌ ☠ 💀 🕱

  export let addition = {
    Blank: {
      count: 2,
      head: "&nbsp;",
      markers: [
        { left: xMargin, top: yType, color: "white", content: "" },
        { left: xMargin, top: yBase - 1.0 * offset, color: "white", content: "" },
        { right: xMargin, top: yBase - 1.0 * offset, color: "white", content: "" },
      ]
    },
  }

  export let rules = {
    RulesFront: {
      count: 12,
      head: "",
      background: "Cover/CoverCity.svg",
      text: {
        content: `<ol>
        <li style="list-style: upper-roman;">The Henchman's Journey</li><ul> 
          <li>If you want him to travel,<br/> 
          roll a die and move him<br/> 
          that number of fields or less<br/> 
          over adjacent empty fields,<br/> 
          but not diagonal.</li> 
          <li>Stop on a card or another stooge,<br/> 
          except in the city. To enter this,<br/> 
          stop outside the walls one night.</li> 
          <li>Card visited? Uncover!</li> 
          </ul> 
        <li style="list-style: upper-roman;">The Dukes Sway</li><ul> 
          <li>Insert or present a card,<br/>
          mandatory, if limit of 4 exceeded.</li> 
          <li>Draw, if less than 4 on hand.</li> 
        </ul> 
        <li value="1">In the city</li> 
          <table> 
          <tr><td style="background-color:${yellow}; width:1em;">&nbsp;</td> 
          <td>per day</td><td></td><td>→ +2 gulden</td></tr> 
          <tr><td style="background-color:${red}; width:1em;">&nbsp;</td> 
          <td>per day</td><td>-3 gulden</td><td>→ +1 strength</td></tr> 
          <tr><td style="background-color:${blue}; width:1em;">&nbsp;</td> 
          <td></td><td>-x gulden</td><td>→ +x arms</td></tr> 
          <tr><td rowspan="2" style="background-color:${green}; width:1em;">&nbsp;</td> 
          <td></td><td>-x gulden</td><td>→ +x•3 health</td></tr> 
          <tr> 
          <td></td><td>-5 gulden</td><td>→ detoxication</td></tr> 
          </table> 
          <ul><li>Combat prohibited!</li></ul> 
        </ol> 
        ` },
    },
    RulesBack: {
      count: 12,
      head: "",
      background: "Cover/CoverSword.svg",
      text: {
        content: `<ol start='2'>
          <li>Play card</li><ul> 
            <li>Only in your own turn<br/> 
            and only one or none per turn.</li> 
            <li>Insert card into empty field,<br/> 
            or present if <span class="text" style="background-color: black; color: white;">⛤</span> 
            or <span class="text" style="background-color: black; color: white;">Xy</span>.</li> 
            <li><strong><span class="text" style="background-color: black; color: white;">⛤</span> playable in stooges journey</strong></li> 
            <li>Store treasure possible only<br/> 
            while henchman is in castle,<br/> 
            counts as played card.</li> 
          </ul> 
          <li>Uncover card</li><ul> 
            <li><span class="text" style="background-color:white;">?</span> attacks immediately.</li> 
            <li><span class="text" style="background-color:white;">⚔</span>, <span class="text" style="background-color:white;">⚕</span>, <span class="text" style="background-color:white;">🗲</span> involuntary effect.</li> 
            <li><span class="text" style="background-color:white;">⌂</span> optional effect, stays in place.</li> 
            <li><span class="text" style="background-color:white;">⛤</span> and <span class="text" style="background-color:white;">Xy</span> be picked up on hand.</li> 
          </ul> 
            <li>Exchanging blows</li><ul>
            <li>Impact = strenght + arms + roll.</li>
            <li>Blow with higher impact hits.</li>
            <li>Damage to health of beaten:<br/>
            difference of impact values.</li>
            <li>Decrease arms by 1 point.</li>
            <li>Flight or death ends combat.</li>
            <li>Flight: no roll for defense.</li>
          </ul>
      </ol> 
    ` },
    }
  }

  export let chests = {
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
  }

  export let city = {
    Tavern: {
      count: 4,
      head: "Tavern",
      background: "City/CityBackTall.svg",
      backgroundColor: yellow,
      image: { url: "Images/City_Tavern.png", scale: 0.4, top: 24, left: 5 },
      text: { content: "2 gulden per day<br/>for dishwashing!<br/><br/>" },
      markers: [
        { right: xMargin - 0.3 * offset, top: yBase + 0 * offset, color: yellow, content: "+2" },
        { left: xMargin - 0.3 * offset, top: yBase + 0 * offset, color: "white", content: "1" },
        { left: xMargin - 0.7 * offset, top: yBase - 0.4 * offset, url: "Images/Turn.svg", scale: 1 },
        { left: xMargin + 0.9 * offset, top: yBase - 0.0 * offset, url: "Images/Arrow.svg", scale: 1 },
      ]
    },
    Healer: {
      count: 4,
      head: "Healer",
      background: "City/CityBackTall.svg",
      backgroundColor: green,
      image: { url: "Images/City_Healer.png", scale: 0.35, top: 25, left: 5 },
      text: { content: "Heals or detoxicates!<br/><br/>" },
      markers: [
        { right: xMargin - 0.3 * offset, top: yBase + 0.7 * offset, color: green, content: "+3" },
        { right: xMargin - 0.3 * offset, top: yBase - 0.5 * offset, color: green, content: "-0" },
        { right: xMargin - 0.4 * offset, top: yBase - 0.9 * offset, url: "Images/Turn.svg", scale: 1 },
        { left: xMargin - 0.3 * offset, top: yBase + 0.7 * offset, color: yellow, content: "-1" },
        { left: xMargin - 0.3 * offset, top: yBase - 0.5 * offset, color: yellow, content: "-5" },
        { left: xMargin + 0.9 * offset, top: yBase - 0.5 * offset, url: "Images/Arrow.svg", scale: 1 },
        { left: xMargin + 0.9 * offset, top: yBase + 0.8 * offset, url: "Images/Arrow.svg", scale: 1 },
      ]
    },
    Gym: {
      count: 4,
      head: "Gym",
      background: "City/CityBackTall.svg",
      backgroundColor: red,
      image: { url: "Images/City_Gym.png", scale: 0.35, top: 27, left: 6 },
      text: { content: "On training per day<br/>for 3 gulden!<br/><br/>" },
      markers: [
        { right: xMargin - 0.3 * offset, top: yBase + 0 * offset, color: red, content: "+1" },
        { left: xMargin - 0.3 * offset, top: yBase + 0 * offset, color: yellow, content: "-3" },
        { left: xMargin - 0.7 * offset, top: yBase - 0.4 * offset, url: "Images/Turn.svg", scale: 1 },
        { left: xMargin + 0.9 * offset, top: yBase + 0.0 * offset, url: "Images/Arrow.svg", scale: 1 },
      ]
    },
    Forge: {
      count: 4,
      head: "Blacksmith",
      background: "City/CityBackTall.svg",
      backgroundColor: blue,
      image: { url: "Images/City_Forge.png", scale: 0.35, top: 27, left: 6 },
      text: { content: "Makes the finest arms!<br/><br/>" },
      markers: [
        { right: xMargin - 0.3 * offset, top: yBase + 0.0 * offset, color: blue, content: "+1" },
        { left: xMargin - 0.3 * offset, top: yBase + 0.0 * offset, color: yellow, content: "-1" },
        { left: xMargin + 0.9 * offset, top: yBase + 0.0 * offset, url: "Images/Arrow.svg", scale: 1 },
      ]
    },
  };

  export let map = {
    count: 1,
    head: "Map",
    image: { url: "Images/Map.png", scale: 0.45, top: 23, left: 7 },
    text: { content: "Present this card,<br/>when your henchman<br/>stands on the<br/>specified field,<br/>to raise a treasure." },
    markers: [
      { left: xMargin, top: yType, color: "black", content: "", class: "instant" },
    ]
  };

  export let traps = {
    Skip: {
      count: 4,
      head: "Enslaved",
      image: { url: "Images/Skip.png", scale: 0.45, top: 20, left: 9 },
      text: { content: "Skip the next round!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "🗲" },
        { left: xMargin, top: yBase, color: "grey", content: "" },
        { left: xMargin - 0.4, top: yBase + 1.5, color: transparent, content: "❌" },
        { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
      ]
    },
    Poison: {
      count: 4,
      head: "Poisoned",
      image: { url: "Images/Poison.png", scale: 0.4, top: 18, left: 11 },
      text: { content: "At the end<br/>of each day<br/>your henchman<br/>loses health!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "🗲" },
        { left: xMargin, top: yBase, color: green, content: "-1" },
        { left: xMargin - 2.7, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
      ]
    },
    Switch: {
      count: 2,
      head: "Confused",
      image: { url: "Images/Switch.png", scale: 0.4, top: 18, left: 11 },
      text: { content: "The mob lynches<br/>your henchman...<br/>a while.<br/>He loses<br/>half of his health!<br/>(round down result)" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "🗲" },
        { left: xMargin, top: yBase, color: green, content: "÷2" },
      ]
    },
    Pikes: {
      count: 2,
      head: "Tripped",
      image: { url: "Images/Pikes.png", scale: 0.51, top: 21, left: 5.9 },
      text: { content: "Your henchman<br/>loses five points<br/>of his health!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "🗲" },
        { left: xMargin, top: yBase - 0 * offset, color: green, content: "-5" },
      ]
    },
    Theft: {
      count: 2,
      head: "Slumbered",
      image: { url: "Images/Theft.png", scale: 0.4, top: 19, left: 7 },
      text: { content: "Every second<br/>weapon is stolen<br/>from your stooge!<br/>(round down result)" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "🗲" },
        { left: xMargin, top: yBase, color: blue, content: "÷2" },
      ]
    },
    Snakes: {
      count: 2,
      head: "Devoured",
      image: { url: "Images/Snakes.png", scale: 0.45, top: 18, left: 7 },
      text: { content: "Your henchman<br/>loses half of<br/>his strength!<br/>(round down result)" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "🗲" },
        { left: xMargin, top: yBase, color: red, content: "÷2" },
      ]
    },
  };

  export let spells = {
    Stun: {
      count: 4,
      head: "Paralyze",
      image: { url: "Images/Stun.png", scale: 0.40, top: 16, left: 9 },
      text: { content: "Stuns the opponent<br/>for one blow<br/>in combat!" },
      markers: [
        { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
      ]
    },
    Earthquake: {
      count: 4,
      head: "Earthquake",
      image: { url: "Images/Earthquake.png", scale: 0.38, top: 17.7, left: 7.4 },
      text: { content: "Discard a card<br/>from an arbitrary field.<br/>Fails in the city<br/>and in fields with<br/>treasures or henchmen!" },
      markers: [
        { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
      ]
    },
    ThirdEye: {
      count: 4,
      head: "The Third Eye",
      image: { url: "Images/ThirdEye.png", scale: 0.45, top: 17.7, left: 6.8 },
      text: { content: "Peek at the cards<br/>in the fields adjacent<br/>to your henchman.<br/>Not diagonal." },
      markers: [
        { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
      ]
    },
    Crystal: {
      count: 1,
      head: "Crystal Orb",
      image: { url: "Images/Crystal.png", scale: 0.45, top: 16.7, left: 11.8 },
      text: { content: "Peek into the cards<br/>of another duke<br/>and take one,<br/>but not a treasure.<br/>The victim of theft<br/>takes draw a new one." },
      markers: [
        { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
      ]
    },
    Teleport: {
      count: 1,
      head: "Teleportation",
      image: { url: "Images/Teleport.png", scale: 0.35, top: 16, left: 9.7 },
      text: { content: "Immediately moves<br/>any one henchman<br/>to any field!<br/>If a card is present,<br/>it must be uncovered in<br/>the turn of that stooge." },
      markers: [
        { left: xMargin, top: yType, color: "black", content: "⛤", class: "instant" },
      ]
    },
  };

  export let weapons = {
    Knife: {
      count: 6,
      head: "Knife",
      image: { url: "Images/Knife.png", scale: 0.55, top: 27, left: 10 },
      markers: [
        { right: xMargin, top: yBase, color: blue, content: "+1" },
        { left: xMargin, top: yType, color: "white", content: "⚔" },
      ]
    },
    Dagger: {
      count: 5,
      head: "Dagger",
      image: { url: "Images/Dagger.png", scale: 0.55, top: 21, left: 10 },
      markers: [
        { right: xMargin, top: yBase, color: blue, content: "+2" },
        { left: xMargin, top: yType, color: "white", content: "⚔" },
      ]
    },
    Spear: {
      count: 4,
      head: "Spear",
      image: { url: "Images/Spear.png", scale: 0.55, top: 21, left: 8 },
      markers: [
        { right: xMargin, top: yBase, color: blue, content: "+3" },
        { left: xMargin, top: yType, color: "white", content: "⚔" },
      ]
    },
    Sword: {
      count: 3,
      head: "Sword",
      image: { url: "Images/Sword.png", scale: 0.5, top: 23, left: 7 },
      markers: [
        { right: xMargin, top: yBase, color: blue, content: "+4" },
        { left: xMargin, top: yType, color: "white", content: "⚔" },
      ]
    },
    Mace: {
      count: 2,
      head: "Mace",
      image: { url: "Images/Mace.png", scale: 0.55, top: 19, left: 7 },
      markers: [
        { right: xMargin, top: yBase, color: blue, content: "+5" },
        { left: xMargin, top: yType, color: "white", content: "⚔" },
      ]
    },
    Axe: {
      count: 1,
      head: "Battleaxe",
      image: { url: "Images/Axe.png", scale: 0.55, top: 17, left: 7 },
      markers: [
        { right: xMargin, top: yBase, color: blue, content: "+6" },
        { left: xMargin, top: yType, color: "white", content: "⚔" },
      ]
    },
  }
  export let potions = {
    Detox: {
      count: 2,
      head: "Cleansing",
      image: { url: "Images/Detox.png", scale: 0.35, top: 15, left: 11 },
      text: { content: "Stops the loss of<br/>health due to toxication.<br/>Doesn't restore health!" },
      markers: [
        { right: xMargin, top: yBase, color: green, content: "-0" },
        { right: xMargin - 1, top: yBase - 2.7, url: "Images/Turn.svg", scale: 1 },
        { left: xMargin, top: yType, color: "white", content: "⚕" },
      ]
    },
    Heal: {
      count: 4,
      head: "Healing",
      image: { url: "Images/Heal.png", scale: 0.45, top: 22, left: 4 },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        { right: xMargin, top: yBase, color: green, content: "15" },
      ]
    },
    Power0: {
      count: 3,
      head: "Potion of strength",
      image: { url: "Images/Power0.png", scale: 0.4, top: 22, left: 9 },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        { right: xMargin, top: yBase, color: red, content: "+1" },
      ]
    },
    Power1: {
      count: 2,
      head: "Superpower",
      image: { url: "Images/Power1.png", scale: 0.4, top: 22, left: 8 },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⚕" },
        { right: xMargin, top: yBase, color: red, content: "+2" },
      ]
    }
  }

  export let places = {
    Casino: {
      head: "Casino",
      image: { url: "Images/Casino.png", scale: 0.35, top: 15, left: 11 },
      text: { content: "Play a simple roulette.<br/>A maximum of<br/>three times per day<br/>bet on even or odd<br/>and roll your die,<br/>to double or lose<br/>your wager." },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+" },
        { left: xMargin, top: yBase, color: yellow, content: "-" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    DragonsLair: {
      head: "Dragons Lair",
      image: { url: "Images/DragonsLair.png", scale: 0.35, top: 15, left: 9.5 },
      text: { content: "If you<br/>send your<br/>stooge in,<br/>roll your die,<br/>to determine his fate!" },
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
      head: "Portal",
      image: { url: "Images/Teleportal.png", scale: 0.35, top: 15, left: 9.5 },
      // text: { content: "Schickt deinen Schergen<br/>auf ein beliebiges<br/>freies Feld<br/>im zufälligen Zielland!" },
      text: { content: "Roll a die<br/>to send your henchman<br/>to an arbitrary field<br/>in the chosen land!" },
      markers: [
        { left: xMargin, top: yBase - 1.5 * offset, color: green, content: "🕱", class: "skull" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },
        { left: 11, top: 36, url: "Images/Teleportal.svg" },
      ]
    },
    Rumpelstilz: {
      head: "Rumpelstilz",
      image: { url: "Images/Rumpelstilz.png", scale: 0.35, top: 20, left: 9.5 },
      text: { content: "If you succeed,<br/>naming a number<br/>and then rolling<br/>it with your die,<br/>you gain 6 gulden!" },
      markers: [
        { right: xMargin, top: yBase - 0 * offset, color: yellow, content: "+6" },
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Elf: {
      head: "Elf, the Scout",
      image: { url: "Images/Elf.png", scale: 0.35, top: 20, left: 8.5 },
      text: { content: "Eager to help,<br/>the Elf shows you<br/>an arbitrary card<br/>in the whole Reich!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Dealer: {
      count: 2,
      head: "Priest of Trade",
      image: { url: "Images/Dealer.png", scale: 0.4, top: 17, left: 7.5 },
      text: { content: "For 2 gulden each<br/>draw cards<br/>from the drawing pile<br/>on your hand." },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
        { left: xMargin, top: yBase - 1 * offset, color: yellow, content: "-2" },
      ]
    },
    Tornado: {
      head: "Tornado",
      image: { url: "Images/Tornado.png", scale: 0.4, top: 17, left: 7.5 },
      text: { content: "Simultaneously<br/>each player draws a card<br/>from the hand of his<br/>neighbor on the right<br/>...treasures included!<br/>The tornado calms down<br/>to the discard pile." },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Arena: {
      head: "Arena",
      image: { url: "Images/Arena.png", scale: 0.45, top: 15.5, left: 8 },
      text: { content: "Challenge a henchman,<br/>who is immediately<br/>teleported here for a duell.<br/>The arena then collapses<br/>to the discard pile." },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
      ]
    },
    Horse: {
      count: 3,
      head: "Stable",
      image: { url: "Images/Stable.png", scale: 0.12, top: 22, left: 7 },
      text: { content: "Rent a horse<br/>for one gulden<br/>and roll your die again,<br/>to bring your henchman</br>further forward." },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
        { left: xMargin, top: yBase - 1.0 * offset, color: yellow, content: "-1" },
      ]
    },
    Shadow: {
      count: 1,
      head: "Master of Thieves",
      image: { url: "Images/Thief.png", scale: 0.18, top: 20, left: 10 },
      text: { content: "Pay 5 gulden</br>and select a player</br>with a treasure on hand.</br>If he rolls less than 5,</br>you snatch the treasure!" },
      markers: [
        { left: xMargin, top: yType, color: "white", content: "⌂" },
        { left: xMargin, top: yBase - 1.0 * offset, color: yellow, content: "-5" },
      ]
    },
    // Smeltery: {
    //   count: 1,
    //   head: "Schmelzerei",
    //   image: { url: "Images/Smeltery.png", scale: 0.15, top: 17, left: 9 },
    //   text: { content: "Schmelze deine Rüstung</br>und erhalte ein Goldstück<br/>für je zwei Waffenpunkte.</br>Zehn für einen Schatz!" },
    //   markers: [
    //     { left: xMargin, top: yType, color: "white", content: "⌂" },
    //     { left: xMargin, top: yBase - 1.0 * offset, color: blue, content: "-2" },
    //     { right: xMargin, top: yBase - 1.0 * offset, color: yellow, content: "+1" },
    //   ]
    // },
  };

  export let enemies = {
    Robber01: {
      count: 2,
      head: "Bandit",
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
      head: "Bandit",
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
      head: "Assassin",
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
      head: "Assassin",
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
      head: "Legionary",
      image: { url: "Images/Hun1.png", scale: 0.35, top: 21.2, left: 13.2 },
      markers: [
        // { left: horzMargin, top: vertBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+3" },
        { left: xMargin, top: yType, color: "white", content: "4" },
      ]
    },
    Robber11: {
      count: 1,
      head: "Bandit",
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
      head: "Bandit",
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
      head: "Bandit",
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
      head: "Assassin",
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
      head: "Legionary",
      image: { url: "Images/Hun0.png", scale: 0.35, top: 21.2, left: 11 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+4" },
        { left: xMargin, top: yType, color: "white", content: "7" },
      ]
    },
    Robber21: {
      count: 2,
      head: "Bandit",
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
      head: "Assassin",
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
      head: "Legionary",
      image: { url: "Images/German0.png", scale: 0.34, top: 24, left: 9 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+5" },
        { left: xMargin, top: yType, color: "white", content: "10" },
      ]
    },
    Robber31: {
      head: "Bandit Boss",
      image: { url: "Images/Boss1.png", scale: 0.38, top: 22, left: 6 },
      text: { content: theft },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "÷2" },
        { right: xMargin, top: yBase, color: yellow, content: "+6" },
        { left: xMargin, top: yType, color: "white", content: "11" },
      ]
    },
    Rogue31: {
      head: "Chief Assassin",
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
      head: "Legionary Major",
      image: { url: "Images/Boss2.png", scale: 0.37, top: 17.3, left: 6.4 },
      markers: [
        { right: xMargin, top: yBase, color: yellow, content: "+6" },
        { left: xMargin, top: yType, color: "white", content: "13" },
      ]
    },
    Giant1: {
      head: "Giant Bandit",
      image: { url: "Images/Giant0.png", scale: 0.37, top: 17, left: 6.4 },
      text: { content: theft },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "÷2" },
        { right: xMargin, top: yBase, color: yellow, content: "+8" },
        { left: xMargin, top: yType, color: "white", content: "14" },
      ]
    },
    Giant2: {
      head: "Assasin Titan",
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
      text: { content: "If your henchman flees,<br/>he loses all gulden!" },
      markers: [
        { left: xMargin, top: yBase, color: yellow, content: "0" },
        { right: xMargin, top: yBase, color: yellow, content: "+15" },
        { left: xMargin, top: yType, color: "white", content: "20" },
      ]
    },
  };
}
