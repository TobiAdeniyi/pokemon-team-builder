

async function fetchPokemon(pokemonName) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("Invalid pokemon");
    }

}


class Team {

    constructor(name) {
        this.name = name;
        this.id = Math.floor(Math.random() * 1001);
        this.members = []; /* An array of pokemon objects. Should we make this a map instead, so we can swap pokemon more efficiently? Something like
        {pokemonName : positionInParty}. Would also give us constant time lookup to check if a pokemon is in our party (search) */
    }

    // Fetch and add a pokemon to our party members
    addPokemon(pokemon) {
        this.members.push(fetchPokemon(pokemon))
    }

    // Searches party for pokemonName, returns true if found, or false if not
    search(pokemonName) {
        for (let i=0; i < this.members.length; i++) {
            // Lowercase both names to ensure case-insensitive comparison
            if (this.members[i].name.toLowerCase() === pokemonName.toLowerCase()) {
                return true;
            }
        }

        // Not found
        return false;
    }

    removePokemon(pokemonName) {
        for (let i=0; i < this.members.length; i++) {
            if (this.members[i].name.toLowerCase() === pokemon.toLowerCase()) {
                this.members.splice(i, 1);
            }
        }

        // Not found
        console.log("Pokemon not found!");
    }
}

module.exports = Team
