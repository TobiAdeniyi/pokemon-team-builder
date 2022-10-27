const fetch = require("cross-fetch");

// TODO
// async function fetchPokemon(pokemonName) {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     throw new Error("Invalid pokemon");
//   }

// }


class Team {

  constructor(name) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1001);
    this.members = []; /* An array of pokemon objects. Should we make this a map instead, so we can swap pokemon more efficiently? Something like
      {pokemonName : positionInParty}. Would also give us constant time lookup to check if a pokemon is in our party (search) */
  }

  // Fetch and add a pokemon to our party members
  async addMember(pokemon) {
    if (this.members.length === 6) { throw new Error("Party is full!") }
    if ((pokemon === undefined) || (pokemon === "")) { throw new Error("Pokemon Name Missing!"); }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      if (data === undefined) { throw new Error("Pokemon does not exist!"); }

      // console.log(data.name);
      this.members.push(data);

    } catch (error) {
      throw new Error("Invalid pokemon");
    }


    // TODO
    // const member = fetchPokemon(pokemon);
    // this.members.push(member);
  }

  // Searches party for pokemonName, returns true if found, or false if not
  search(pokemonName) {
    for (let i = 0; i < this.members.length; i++) {
      // Lowercase both names to ensure case-insensitive comparison
      if (this.members[i].name.toLowerCase() === pokemonName.toLowerCase()) {
        return true;
      }
    }

    // Not found
    return false;
  }

  removeMember(pokemonName) {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].name.toLowerCase() === pokemon.toLowerCase()) {
        this.members.splice(i, 1);
      }
    }

    // Not found
    throw new Error("Pokemon not found!");
  }
}

module.exports = Team
