'use strict';

const StationItem = (station,update) => {
  const item = $('<div class="item"></div>');
  const name = $('<h1>'+station.name+'</h1>');
  const district = $('<p>'+station.district+'</p>');
  const button = $('<button>Ir al mapa</button>');

  button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = station;
    update();
  });

  item.append(name);
  item.append(district);
  item.append(button);

  return item;
}

const reRender = (container,filter,update) => {
  container.empty();
  const filteredStations = filterByDistrict(state.stations,filter);
  if (filteredStations.length > 0) {
    $.each(filteredStations,(index,station) => {
      container.append(StationItem(station,update));
    });
  } else {
    container.append($('<p>Distrito no encontrado</p>'));
  }
}

const Search = (update) => {
  const search = $('<div></div>');
  const input  = $('<input type="text" placeholder="Ingresa busqueda">');
  const result = $('<div class="result"></div>');

  search.append(input);
  search.append(result);

  input.on('keyup',(e) => {
    const filter = input.val();
    reRender(result,filter,update);
  });
  reRender(result,"",update);

  return search;
}
