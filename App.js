import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import Header from './components/Header';
import {PreferencesContext} from './components/PreferencesContext';
import * as screens from './components/screens';
import StatusBar from './components/StatusBar';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#00c853',
    accent: '#00e676',
    ripples: '#b9f6ca',
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#00c853',
    accent: '#00e676',
    ripples: '#757575',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <React.Fragment>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={screens.Home}
                options={{
                  header: props => (
                    <Header {...props} title="BetterlifeSavings" />
                  ),
                }}
              />
              <Stack.Screen
                name="Messages"
                component={screens.Messages}
                options={{
                  header: props => <Header {...props} title="Messages" />,
                }}
              />
            </Stack.Navigator>
            <StatusBar />
          </React.Fragment>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
