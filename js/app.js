//! GET ELEMENTS

let elPokeForm = document.querySelector(".poke_form");
let elSearchPoke = document.querySelector(".seacrch-poke");
let elPokeCategory = document.querySelector(".poke-category");
let elSortSelect = document.querySelector(".sort-select");

//! LIST STARTS
const elPokeList = document.querySelector(".js_pokemon_list");

//! RENDER STARTS 
function renderpokemons(poke) {
    elPokeList.innerHTML = "";
    const elTemplate = document.querySelector(".js-temp");
    const elFragment = document.createDocumentFragment();
    poke.foreach(item => )


}