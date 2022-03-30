import React from 'react';
import {Appbar, Switch, TouchableRipple, useTheme} from 'react-native-paper';
import {PreferencesContext} from './PreferencesContext';

export const Header = ({scene}) => {
  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}>
      <Appbar.Content title={scene.route?.name} />
      <TouchableRipple onPress={() => toggleTheme()}>
        <Switch
          style={[{backgroundColor: theme.colors.accent}]}
          color={'red'}
          value={isThemeDark}
        />
      </TouchableRipple>
    </Appbar.Header>
  );
};
