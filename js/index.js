'use strict';

const render = (root,puntaje) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  root.append(wrapper);
  // if(state.sede == null){
  //   wrapper.append(Juego(_ => render(root),state.selectedCoder));
  // }
}

const state = {
  sede: null,
  coders: null,
  selectedCoder: null,
  punto: 0,
  intentos: 5,
  acierto:0,
};

$( _ => {

    const root = $('.root');
    render(root);



});
