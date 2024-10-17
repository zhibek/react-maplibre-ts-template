import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1769aa',
      },
      secondary: {
        main: '#ab003c',
      },
    },
  });

  const location = {
    latitude: 51.5078,
    longitude: -0.128,
  };

  const zoom = 4;

  const mapStyleUrl = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <AppBar position="static">
        <Toolbar>
          Map
        </Toolbar>
      </AppBar>

      <Grid
        container
        style={{ height: '100%' }}
      >

        <Grid
          size={{ xs: 12, md: 9 }}
          order={{ xs: 1, md: 2 }}
          minHeight="70%"
        >
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
        </Grid>

        <Grid
          size={{ xs: 12, md: 3 }}
          order={{ xs: 2, md: 1 }}
          minHeight="30%"
          style={{ background: 'lightgray' }}
        >
          <Box margin={3}>
            <p>Panel Data</p>
          </Box>
        </Grid>

      </Grid>

    </ThemeProvider>
  );
}

export default App;
