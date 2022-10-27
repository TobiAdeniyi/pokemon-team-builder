// import { Team, fetchPokemon } from "./team.js";

const previewImg = document.querySelector("#pokemon-preview-img");
const searchButton = document.querySelector("#search-button");
const stats = document.querySelector("#pkm-stats");
const removePokemonButtons = document.getElementsByClassName(
  "remove-pokemon-button"
);
const myTeam = new Team("generic");
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchButton.click();
  }
});
searchButton.addEventListener("click", searchPokemon);

async function searchPokemon() {
  const name = document.querySelector("#search-input").value;
  const data = await fetchPokemon(name);
  previewImg.src = data.sprites.other.dream_world["front_default"];
  previewImg.value = data.name;
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const spAttack = data.stats[3].base_stat;
  const spDefense = data.stats[4].base_stat;
  const speed = data.stats[5].base_stat;

  stats.innerText = `
  ${data.name}

  hp: ${hp}
  attack: ${attack}
  defense: ${defense}
  spAttack: ${spAttack}
  spDefense: ${spDefense}
  speed: ${speed}
  `;
}

// drag and drop
previewImg.addEventListener("dragstart", (e) => {
  console.log("dragging starting");
  e.currentTarget.classList.add("dragging");
  e.dataTransfer.clearData();
  e.dataTransfer.setData("text", e.target.id);
});

previewImg.addEventListener("dragend", (e) => {
  e.currentTarget.classList.remove("dragging");
  console.log(e.currentTarget);
});

const targetAll = document.getElementsByClassName("droptarget");
for (let target of targetAll) {
  target.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  target.addEventListener("drop", (e) => {
    console.log("dropping");
    e.preventDefault();
    console.log("target: " + target.id);
    try {
      const id = e.dataTransfer.getData("text");
      const source = document.getElementById(id);
      target.src = source.src;
      target.value = source.value;
      let nameLabel = document.getElementById(target.id + "-label");
      nameLabel.innerText = source.value;
      myTeam.addMember(nameLabel.innerText);
    } catch (error) {
      console.log(error);
    }
  });
}

// remove pokemons
for (let removeButton of removePokemonButtons) {
  removeButton.addEventListener("click", () => {
    let num = removeButton.id.slice(-1);
    clearPokemonPosition(num);
  });
}

function clearPokemonPosition(num) {
  let name = document.getElementById("pokemon-" + num + "-img-label");
  console.log(name);
  if (name.innerText <= 0) {
    return;
  }
  myTeam.removeMember(name.innerText);
  let img = document.getElementById("pokemon-" + num + "-img");
  img.src =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dream-world/poke-ball.png";
  img.value = "";
  name.innerText = "";
}
