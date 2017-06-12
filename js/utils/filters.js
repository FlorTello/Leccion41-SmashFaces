'use strict';

const generarAleatorio = (array) => {
  const indice =  Math.floor(Math.random()*array.length);
  state.selectedCoder = state.coders[indice];
  console.log(state.selectedCoder);
};

const validarRespuesta = (input,respuesta,update) => {
  if(input.toLowerCase() === respuesta.toLowerCase()){
    state.punto += 5;
    $('.mensaje').text("Excelente");
  }else{
    $('.mensaje').text("Sigue Intentando");
    state.punto -= 1;
  }
  $('.puntos').html(state.punto + " puntos")
};
