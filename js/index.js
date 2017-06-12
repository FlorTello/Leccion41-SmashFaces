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
  intentos: 5
};

$( _ => {

  // getJSON('stations.json', (err, json) => {
  //
  //   if (err) { return alert(err.message);}
  //
  //   state.stations = json;

    const root = $('.root');
    render(root);



  // });

});
