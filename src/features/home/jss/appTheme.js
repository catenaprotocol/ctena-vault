import { createTheme } from '@material-ui/core/styles';

const createThemeMode = isNightMode =>
  createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? '#222145' : '#fbf9f6',
        paper: isNightMode ? '#222145' : '#fff',
        primary: isNightMode ? '#0f4c5c' : '#FBF6F0',
        secondary: isNightMode ? '#746f90' : '#F8F2EC',
        extra: isNightMode ? '#242332' : '#FBF6F0',
        dark: isNightMode ? '#2B2A3D' : '#999',
        paused: isNightMode ? '#e36414' : '#FCE57E',
        retired: isNightMode ? '#fb8b24' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
        border: isNightMode ? '#2B2A3D' : '#DED9D5',
        overlay: isNightMode ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)',
      },
      primary: {
        main: isNightMode ? '#fff' : '#000',
      },
      secondary: {
        main: isNightMode ? '#fff' : '#F8F2EC',
      },
      text: {
        primary: isNightMode ? '#fff' : '#000',
        secondary: isNightMode ? '#B0B0DD' : '#00000066',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#fff' : '#000',
        },
        colorSecondary: {
          color: isNightMode ? '#fff' : '#000',
        },
      },
    },
  });

export default createThemeMode;
