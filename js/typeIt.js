$(document).ready(() => {
  // TypeIT
//   const navAni = new TypeIt('#navBarText', {
//     strings: ['Navigation', 'Menu'],
//   });

  const rickApi = new TypeIt('#rick', {
    strings: ['Rick And Morty Api'],
  });

  const charIds = new TypeIt('#charId', {
    strings: ['Rick And Morty Ids'],
  });

  const pokeApi = new TypeIt('#poke', {
    strings: ['PokeApi'],
  });
  //   navAni.go();
  rickApi.go();
  charIds.go();
  pokeApi.go();
});
