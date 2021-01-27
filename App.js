import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import Navigator from './src/routes/Navigator';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Bold',
      fontWeight: '400',
    },
  },
};
const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    white: 'white',
  },
  fonts: configureFonts(fontConfig),
  roundness: 10,
  animation: {
    scale: 1.0,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
      <Navigator />
    </PaperProvider>
  );
}
