// Write your JS here

const hero = {
  name: "Spiderman",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "axe",
    damage: 2
  }
};

// display stats

const displayStats = person => {
  const nameValue = document.getElementById("t1");
  nameValue.innerHTML = person.name;
  //console.log(person.newName)
  const healthValue = document.getElementById("t2");
  healthValue.innerHTML = person.health;

  if (person.weapon) {
    const weaponTypeValue = document.getElementById("t3");
    weaponTypeValue.innerHTML = person.weapon.type;
    console.log(person.weapon.type);
    const weapoonDamegeValue = document.getElementById("t4");
    weapoonDamegeValue.innerHTML = person.weapon.damage;
    console.log(person.weapon.damage);
  }
};

const rest = person => {
  if (person.health == 10) {
    alert(`Your health is already ${person.health}`);
  } else {
    person.health = 10;
    displayStats(person);
  }
  return person;
};

const pickUpItem = (person, weapon) => {
  person.inventory.push(weapon);
};

const equipWeapon = person => {
  if (person.inventory.length > 0) {
    person.weapon = person.inventory[0];
    displayStats(person);
  }
};

// changing the name of a hero

const heroName = person => {
  const newName = document.getElementById("name").value;
  person.name = newName;
  displayStats(person);
};

displayStats(hero);

//setTimeout(heroName(hero), 10000);

//displayStats(hero);
