'use strict';

const Juego = (update,coder) => {
  const row = $("<div class='row'></div>");
  const col1 = $("<div class='col-xs-6'></div>");
  const image = $(`<img class="foto img-responsive" src="images/fotos/${state.sede}/${coder.image}" width="500" alt="coder">`);
  const col2 = $('<div class="col-xs-6 container-juego"></div>');
  const container = $('<div class="text-center form-group"></div>');
  const label = $('<label for="" class="text-white col-xs-12">Ingresa su nombre</label><br>');
  const input = $('<input type="text" class="col-xs-12 text_name form-control" name="" value="" placeholder="Nombre"><br>');
  const button = $('<input type="button" class="btn btn-info" name="" value="COMPROBAR"><br>');
  const mensaje = $("<label class='text-warning mensaje'> </label>");

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
        setTimeout(_=>{reRender($('.juego'),state.selectedCoder,update);}, 1000);
      }
    }

  });
  return row;
}
const reRender = (container,filter,update) => {
  container.empty();
  if(state.coders.length == 0){
    container.append(Juego(update,filter));
    container.append($('<p>Juego Terminado</p>'));
    state.selectedCoder = null;
 }else if(state.selectedCoder !== null){
   container.append(Juego(update,filter));
 }

}
