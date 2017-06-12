'use strict';

const Juego = (update,coder) => {
  const row = $("<div class='row'></div>");
  const col1 = $("<div class='input-field col-xs-8'></div>");
  const image = $(`<img class="foto img-responsive" src="images/fotos/${state.sede}/${coder.image}" width="500" alt="coder">`);
  const col2 = $('<div class="col-xs-4 container-juego"></div>');
  const container = $('<div class=""></div>');
  const label = $('<label for="">Ingresa su nombre</label><br>');
  const input = $('<input type="text" class="text_name" name="" value="" placeholder="Nombre">');
  const button = $('<input type="button" class="btn btn-info" name="" value="COMPROBAR">');
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
    if(state.intentos == 0 || state.acierto == 1){
      if(state.intentos == 0){
        state.punto -= 1;
      }
      state.intentos = 5;
      generarAleatorio(state.coders);
      if(state.selectedCoder !== null){
        setTimeout(_=>{reRender($('.juego'),state.selectedCoder,update);}, 2000);
      }
    }

  });
  return row;
}
const reRender = (container,filter,update) => {
  container.empty();
  if(state.coders.length == 0){
   container.append($('<p>Juego Terminado</p>'));
   state.selectedCoder = null;
 }else if(state.selectedCoder !== null){
   container.append(Juego(update,filter));
 }

}
