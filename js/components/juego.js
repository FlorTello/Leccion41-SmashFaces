'use strict';

const Juego = (update,coder) => {
  console.log("entro");
  const row = $("<div class='row'></div>");
  const col1 = $("<div class='input-field col s8'></div>");
  const image = $(`<img class="foto" src="images/fotos/${state.sede}/${coder.image}" alt="coder" width="300">`);
  const col2 = $('<div class="col s7"></div>');
  const container = $('<div class="container"></div>');
  const label = $('<label for="">Ingresa s nombre</label><br>');
  const input = $('<input type="text" class="text_name" name="" value="" placeholder="Nombre">');
  const button = $('<input type="button" name="" value="COMPROBAR">');
  const mensaje = $("<label class = 'mensaje'> </label>");


  container.append(label);
  container.append(input);
  container.append(button);
  container.append(mensaje);

  col2.append(container);

  col1.append(image);

  row.append(col1);
  row.append(col2);

  button.on('click',(e)=>{
    validarRespuesta(input.val(),state.selectedCoder.name,update);
    // setInterval(() => {
    state.intentos -= 1;
    if(state.intentos == 0){
      generarAleatorio(state.coders);
      if(state.selectedCoder !== null){
        reRender($('.juego'),state.selectedCoder,update);
      }
    }
    // reRender($('.juego'),"",update);
    // reRender($('.juego'),state.selectedCoder,update);
    // }, 5000);
  });
  return row;
}
const reRender = (container,filter,update) => {
  state.intentos = 5;
  container.empty();
  if(state.punto == -7){
    console.log('-77');
   container.append($('<p>Juego Terminado</p>'));
 }
 container.append(Juego(update,filter));
  // if (state.intentos ) {
  //
  // } else if(state.punto < -5){
  //   container.append($('<p>Juego Terminado</p>'));
  // }
}
