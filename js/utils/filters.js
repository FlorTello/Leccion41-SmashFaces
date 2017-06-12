'use strict';

const generarAleatorio = (array) => {
  const indice =  Math.floor(Math.random()*array.length);
  state.selectedCoder = state.coders[indice];
  console.log(state.selectedCoder);
  var a = state.coders.indexOf(state.selectedCoder);
  console.log(a);
  state.coders.splice(a,1);
};

const validarRespuesta = (input,respuesta,update) => {
  if(input.toLowerCase() === respuesta.toLowerCase()){
    state.punto += 5;
    state.acierto = 1;
    state.intentos = 5;
    $('.mensaje').text("Excelente");
  }else{
    $('.mensaje').text("Sigue Intentando");
    state.acierto = 0;
    state.intentos -= 1;
  }
  $('.puntos').html(state.punto + " puntos")
};
