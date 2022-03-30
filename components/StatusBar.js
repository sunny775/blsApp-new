import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import useStatusBarProps from '../hooks/useStatusBarProps';

const AppStatusBar = () => {
  const {
    hidden,
    animated,
    statusBarStyle,
    statusBarTransition,
    statusBarBackgroundColor,
  } = useStatusBarProps();

  return (
    <SafeAreaView>
      <StatusBar
        animated={animated}
        backgroundColor={statusBarBackgroundColor}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
    </SafeAreaView>
  );
};

export default AppStatusBar;
