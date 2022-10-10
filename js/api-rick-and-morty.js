$(document).ready(() => {
// Se crea la base url https://rickandmortyapi.com/api

  const baseUrl = 'https://rickandmortyapi.com/api';
  const container = document.querySelector('#container');
  const quantity = document.querySelector('#submitQuantity');
  const quantityInput = document.querySelector('#characterQuantity');
  let cantidadPersonajes = 30;
  // Seleccionar el personaje

  // funcion para mostrar la informacion de los personajes en el html

  const showCharacter = (character) => {
  // Se descompone todo las variables para que se mas facil llamarlas sino es: character.name etc, asi es solo name
    const {
      id, name, gender, location, origin, species, status, image,
    } = character;
    // Se crea un contenedor de las cards
    const createDiv = document.createElement('div');
    createDiv.setAttribute('class', 'containerCards');
    // Se hace que se muestre toda la informacion de la api en el html
    const innerText = `
  <div class="charactersCard">
  <img src="${image}" alt="${name} Image" class="characterImg"/>
    <div class="charactersCards__info">
      <h2 class="characterName" id="charName">${name}</h2>
      <p class="${status} margin">Estatus: ${status}</p>
      <p class="characterId margin">Id: ${id}</p>
      <p class="specie margin">Specie: ${species}</p>
      <p class="gender margin">Gender: ${gender}</p>
      <p class="origin margin">Origin: <br/>${origin.name}</p>
      <p class="location margin">Location: <br>${location.name}</p>
    </div>
  </div>
  `;
    // Se agrega al DOM
    createDiv.innerHTML = innerText;
    container.appendChild(createDiv);
  };

  const getCharacter = async (id) => {
    try {
    // Se conecta a la api
      const response = await fetch(`${baseUrl}/character/${id}`);
      // Se soluciona el problema de cors
      const responseJson = await response.json();
      //   console.log(responseJson);
      showCharacter(responseJson);
    } catch (error) {
      console.log(`El error es: ${error}`);
    }
  };
  // Se crear el bucle para iterar sobre el id de los personajes
  const rickFetcher = async (cantidad) => {
  // Bucle para iterar sobre cada id
    for (let i = 1; i <= cantidad; i++) {
      await getCharacter(i); // Se espera la respuesta de la api
    }
  };

  const submit = document.querySelector('#submitCharacter');
  const nameChar = document.querySelector('#characterName');
  //   console.log(nameChar);
  // Agregar un personaje mediante un input
  submit.addEventListener('click', async (e) => {
    e.preventDefault();
    const character = nameChar.value;
    const characterId = parseInt(character);
    await getCharacter(characterId);
  });
  // Seleccionar cantidad de personajes
  quantity.addEventListener('click', (e) => {
    e.preventDefault();
    const quantitySelected = quantityInput.value;
    const quantityEnd = parseInt(quantitySelected);
    cantidadPersonajes = quantityEnd;
    rickFetcher(cantidadPersonajes);
  });
  // Rick and Morty api
});
