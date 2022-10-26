const Team = require("../src/team.js")


// Remove pokemon from members
describe("Remove Pokemon", () => {
  beforeEach(() => {
    team = Team("team1");
    const missingMember = "lucario";
    const members = [
      "ditto",
      "pikachu",
      "eevee",
      "charizard",
      "snoriax",
      "garchomp",
    ];

    // Add pokemon to members
    for (let pokemonName in members) {
      team.addPokemon(pokemonName);
    }
  })

  test("member not in members", () => {
    expect(team.removeMember(missingMember)).toThrow("Pokemon is not a member!");
  })

  // When we remove a pokemon members reduce by one
  // and pokemon is no longer in members
  test("remove first pokemon", () => {
    const pokemonName = menubers[0];
    team.removeMember(pokemonName);
    expect(team.members.length()).toEqual(members.length() - 1);
    expect(team.members.filter(member => member.name == pokemonName)).toBe([])
  })
})


// Fetch and assign pokemon
describe("Add Pokemon", () => {
  beforeEach(() => {
    team = Team("team1");
    const members = [
      "ditto",
      "pikachu",
      "eevee",
      "charizard",
      "snoriax",
      "garchomp",
    ];
    const extraMember = "lucario";
  })

  // No pokemon name specified
  test("no name specified", () => {
    const pokemonName = "";
    expect(team.addPokemon()).toThrow("Pokemon Name Missing!")
  })

  test("undifined pokemon", () => {
    const pokemonName = "does-not-exist";
    expect(team.addPokemon(pokemonName)).toThrow("Pokemon Does not exist!")
  })

  test("correct pokemon name", () => {
    // Add pokemon to members
    for (let pokemonName in members) {
      team.addPokemon(pokemonName);
      expect(team.members[0].name).toEqual(pokemonName);
    }

    // all 6 possitions should be feeled in members
    expect(team.members.length()).toEqual(length(members));
  })

  test("too many pokemons", () => {
    // add the maximum amout of pokemons allowed
    for (let pokemonName in members) {
      team.addPokemon(pokemonName);
    }

    // new member should not be added once members possitions are filled
    expect(team.addPokemon(extraMember)).toThrow("Too many members!");
    expect(team.members.length()).toEqual(length(members));
  })
})

// Search
describe("Serch for Pokemon", () => {

  test("no name specified", () => {})

  test("undifined pokemon", () => {})

  test("correct pokemon name", () => {})

})
