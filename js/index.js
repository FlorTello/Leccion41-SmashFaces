'use strict';

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('peru.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});
