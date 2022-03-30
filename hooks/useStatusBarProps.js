import {useContext, useEffect, useState} from 'react';
import {useTheme} from 'react-native-paper';
import {PreferencesContext} from '../components/PreferencesContext';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const useStatusBarProps = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [animated, setAnimated] = useState(false);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[1],
  );
  const theme = useTheme();
  const {isThemeDark} = useContext(PreferencesContext);
  const [statusBarBackgroundColor, setStatusBarBackgroundColor] = useState(
    isThemeDark ? theme?.colors.surface : theme?.colors.primary,
  );

  useEffect(() => {
    setStatusBarBackgroundColor(
      isThemeDark ? theme?.colors.surface : theme?.colors.primary,
    );
  }, [theme]);

  return {
    hidden,
    animated,
    statusBarStyle,
    statusBarTransition,
    statusBarBackgroundColor,
    setHidden,
    setAnimated,
    setStatusBarStyle,
    setStatusBarTransition,
    setStatusBarBackgroundColor,
  };
};

export default useStatusBarProps;
