
const hero_1 = {
  name: "Bruce",
  lastname: "Banner",
  alias: "Hulk",
  universe: "Marvel",
  vitality: 100,
  power: 80
};
const hero_2 = {
  name: "Bruce",
  lastname: "Wayne",
  alias: "Batman",
  universe: "DC",
  vitality: 120,
  power: 80
};

function hit({ vitality, power, universe, ...props }) {

  console.log(vitality);
}


hit(hero_1);
hit(hero_2);