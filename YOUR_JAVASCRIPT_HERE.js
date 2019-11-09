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
