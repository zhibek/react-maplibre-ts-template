import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  const location = {
    latitude: 51.5078,
    longitude: -0.128,
  };

  const zoom = 4;

  const mapStyleUrl = 'https://demotiles.maplibre.org/style.json';

  return (
    <Map
      initialViewState={{
        latitude: location.latitude,
        longitude: location.longitude,
        zoom,
      }}
      mapStyle={mapStyleUrl}
      hash
    >
      <NavigationControl />
      <Marker
        latitude={location.latitude}
        longitude={location.longitude}
        color="red"
      />
    </Map>
  );
}

export default App;
