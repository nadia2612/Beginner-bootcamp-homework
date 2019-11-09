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
  const nameValue = document.getElementById("1");
  nameValue.innerHTML = person.name;
  //console.log(person.newName)
  const healthValue = document.getElementById("2");
  healthValue.innerHTML = person.health;

  const weaponTypeValue = document.getElementById("3");
  weaponTypeValue.innerHTML = person.weapon.type;

  const weapoonDamegeValue = document.getElementById("4");
  weapoonDamegeValue.innerHTML = person.weapon.damage;
};
displayStats(hero);

const rest = person => {
  if (person.health == 10) {
    alert(`Your health is already ${person.health}`);
  } else {
    person.health = 10;
  }
  return person;

};

const pickUpItem = (person, weapon) => {
  person.inventory.push(weapon);
};

const equipWeapon = person => {
  if (person.inventory.length > 0) {
    person.weapon = person.inventory[0];
  }
};

// changing the name of a hero

const heroName = person => {
  let newName = prompt(`Please incert a name of your hero`);
  return (person.name = newName);
};
// heroName(hero);
// console.log(hero.name);

setTimeout(heroName(hero), 10000);

displayStats(hero);
