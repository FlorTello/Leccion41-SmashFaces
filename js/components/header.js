'use strict';

const Header = (update) => {
  const row = $("<div class='row'></div>");
  const col1 = $("<div class='input-field col s8'></div>");
  const label = $('<label for="select">Elige tu Sede</label>');
  const select = $('<select></select>');
  const option = $('<option value="" disabled selected>Elige una opción</option>');
  const option1 = $('<option value="peru">Lima</option>');
  const option2 = $('<option value="peru">Arequipa</option>');
  const option3 = $('<option value="mexico">Mexico</option>');
  const option4 = $('<option value="mexico">Chile</option>');
  const col2 = $('<div class="col-4"></div>');
  const span1 = $('<span class="label">Puntos:</span>');
  const span2 = $("<span class='puntos'>"+state.punto+"</span>");
  const juego = $('<div class="juego"></div>');

  col2.append(span1);
  col2.append(span2);

  select.append(option);
  select.append(option1);
  select.append(option2);
  select.append(option3);
  select.append(option4);

  col1.append(label);
  col1.append(select);

  row.append(col1);
  row.append(col2);

  row.append(juego);

  select.on('change',(e)=>{
    state.punto = 0;
    state.intentos = 5;
    state.sede = select.val();
    getJSON(state.sede+".json", (err, json) => {
      if (err) { return alert(err.message);}
      state.coders = json;
      generarAleatorio(state.coders);
      // setInterval(() => {
      //   generarAleatorio(state.coders);
      //   if(state.selectedCoder !== null){
      //     reRender(juego,state.selectedCoder,update);
      //   }
      // }, 5000);
      if(state.selectedCoder !== null){
        reRender(juego,state.selectedCoder,update);
      }

    });
  });

  return row;
}
