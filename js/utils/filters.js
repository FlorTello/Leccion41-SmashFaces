'use strict';

const generarAleatorio = (array) => {
  const indice =  Math.floor(Math.random()*array.length);
  state.selectedCoder = state.coders[indice];
  console.log(state.selectedCoder);
};

const validarRespuesta = (input,respuesta,update) => {
  $('.text_name').after("<label class = 'mensaje'> </label>");
  if(input.toLowerCase() === respuesta.toLowerCase()){
    state.punto += 5;
    $('mensaje').text("");

    // generarAleatorio(state.coders);
    // if(state.selectedCoder !== null){
    //   reRender($('.juego'),state.selectedCoder,update);
    // }
  }else{
    $('mensaje').text("Sigue Intentando");
    state.punto -= 1;
  }
};
