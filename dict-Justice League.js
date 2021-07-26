
var superman = {
  name: "superman",
  power: "Flight",
  costumeColor: "red",
  srength: 10000,
  stealth: 20
}

var batman = {
  name: "batman",
  power: "Money",
  costumeColor: "black",
  srength: 100,
  stealth: 85
}

console.log(superman.srength);

console.log(batman.power);

console.log(batman.stealth);

console.log(superman.strength > batman.strength)



var superheroes = [superman, batman]

for (var i=0; i< superheroes.length; i++){
  currentHero = superheroes[i];
  console.log(currentHero.name);
  console.log(currentHero.costumeColor);
  console.log("----------------");
}