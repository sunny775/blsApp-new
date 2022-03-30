import React from 'react';
import {
  Appbar,
  Menu,
  Switch,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import {PreferencesContext} from './PreferencesContext';

function Header({navigation, back, title}) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const theme = useTheme();
  const {toggleTheme, isThemeDark} = React.useContext(PreferencesContext);

  const MENU_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.primary,
        },
      }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title || 'My App'} color="white" />
      <TouchableRipple>
        <Switch
          color={'red'}
          value={isThemeDark}
          onValueChange={() => toggleTheme()}
        />
      </TouchableRipple>
      <Appbar.Action icon="magnify" color="white" onPress={() => {}} />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon={MENU_ICON} color="white" onPress={openMenu} />
          }>
          <Menu.Item
            onPress={() => navigation.navigate('Messages')}
            title="Messages"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 2 was pressed');
            }}
            title="Privacy"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
            }}
            title="Terms of Service"
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}

export default Header;
