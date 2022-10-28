// import fetch from "cross-fetch";

async function fetchPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    const data = await response.json();

    if (data === undefined) {
      throw new Error("Pokemon does not exist!");
    }
    return data;
  } catch (error) {
    throw new Error("Invalid pokemon");
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1001);
    this.members =
      []; /* An array of pokemon objects. Should we make this a map instead, so we can swap pokemon more efficiently? Something like
      {pokemonName : positionInParty}. Would also give us constant time lookup to check if a pokemon is in our party (search) */
  }

  // Fetch and add a pokemon to our party members
  async addMember(pokemonName) {
    // Check if team is full
    // or if input (pokemonName) is empty or undifined
    if (this.members.length === 6) {
      throw new Error("Party is full!");
    } else if (pokemonName === undefined || pokemonName === "") {
      throw new Error("Pokemon Name Missing!");
    }

    try {
      // add pokemon to members
      this.members.push(await fetchPokemon(pokemonName));
    } catch (error) {
      throw new Error("Invalid pokemon");
    }
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
      if (this.members[i].name.toLowerCase() === pokemonName.toLowerCase()) {
        this.members.splice(i, 1);
        return true;
      }
    }

    // Not found
    throw new Error("Pokemon not found!");
  }
}

// export { Team, fetchPokemon };
