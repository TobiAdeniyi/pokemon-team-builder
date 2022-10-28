const Team = require("../src/team.js")


// // Remove pokemon from members
// describe("Remove Pokemon", () => {
//   beforeEach(() => {
//     team = new Team("team1");
//     missingMember = "lucario";
//     members = [
//       "ditto",
//       "pikachu",
//       "eevee",
//       "charizard",
//       "snoriax",
//       "garchomp",
//     ];

//     // Add pokemon to members
//     for (let pokemonName in members) {
//       team.addMember(pokemonName);
//     }
//   })

//   test("member not in members", () => {
//     expect(team.removeMember(missingMember)).toThrow("Pokemon is not a member!");
//   })

//   // When we remove a pokemon members reduce by one
//   // and pokemon is no longer in members
//   test("remove first pokemon", () => {
//     const pokemonName = menubers[0];
//     team.removeMember(pokemonName);
//     expect(team.members.length()).toEqual(members.length() - 1);
//     expect(team.members.filter(member => member.name == pokemonName)).toBe([])
//   })
// })


// Fetch and assign pokemon
describe("Add Pokemon", () => {
  let team;
  let members;
  let extraMember;

  beforeEach(() => {
    team = new Team("team1");
    members = [
      "ditto",
      "pikachu",
      "eevee",
      "charizard",
      "snoriax",
      "garchomp",
    ];
    extraMember = "lucario";
  })

  // // No pokemon name specified
  // test("no name specified", () => {
  //   const pokemonName = "";
  //   expect(async () => await team.addMember(pokemonName)).toThrow("Pokemon Name Missing!")
  // })

  // test("undifined pokemon", () => {
  //   const pokemonName = "does-not-exist";
  //   expect(async () => await team.addMember(pokemonName)).toThrow("Pokemon Does not exist!")
  // })

  test("correct pokemon name", () => {
    // Add pokemon to members
    members.forEach(async (pokemonName, idx) => {
      await team.addMember(pokemonName);
      expect(team.members[idx].name).toEqual(pokemonName);
      expect(team.members.length).toEqual(idx + 1);
    })
  })

  test("too many pokemons", () => {
    // add the maximum amout of pokemons allowed
    members.forEach(async pokemonName => await team.addMember(pokemonName));
    // new member should not be added once members possitions are filled
    expect(async () => await team.addMember(extraMember)).toThrow("Party is full!");
    // expect(team.members.length).toEqual(length(members));
  })
})

// // Search
// describe("Serch for Pokemon", () => {

//   test("no name specified", () => {})

//   test("undifined pokemon", () => {})

//   test("correct pokemon name", () => {})

// })
