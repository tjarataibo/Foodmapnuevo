// Funcionalidad de filtro
// var slider = document.getElementById('slider');

// noUiSlider.create(slider, {
// 	start: [20, 80],
// 	connect: true,
// 	range: {
// 		'min': 0,
// 		'max': 100
// 	}
// });

// Carrousel
$(document).ready(function() {
  $('.slider').slider();
});
         
// Funcionalidad para modal
// var instance = M.Modal.getInstance(elem);

$(document).ready(function() {
  $('.modal').modal();
});

// Información de restaurantes (Datos JSON)
//   function info(place){
//     let name = place.name;
//     let radio = place.vicinity;
//     let star = place.rating;
//     let modaL = document.getElementById('information');
//     modaL.innerHTML += `<h3>${name}</h3><h3>${radio}</h3><p>${star}</p>` 
// }

// Funcionalidad de select
$(document).ready(function() {
  $('select').formSelect();
});