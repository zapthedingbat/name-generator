const metasyntacticVariables = require("./data/metasyntactic-variables");
const elvishNouns = require("./data/elvish-nouns");
const aircraft = require("./data/aircraft");

function pickRandom(obj) {
  const keys = Object.keys(obj);
  const key = keys[Math.floor(Math.random() * keys.length)];
  return {
    value: key,
    description: obj[key],
  };
}

function generateName() {
  const parts = [
    pickRandom(metasyntacticVariables),
    pickRandom(elvishNouns),
    pickRandom(aircraft),
  ];

  return {
    fullName: parts.map((p) => p.value).join(" ") + " Musk",
    parts,
  };
}

module.exports = generateName;
