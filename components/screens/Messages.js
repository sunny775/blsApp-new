import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Fab from '../Fab';

function MessagesScreen({navigation}) {
  const theme = useTheme();

  return (
    <View style={[style.container]}>
      <Text>Messages Screen</Text>
      <Fab />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MessagesScreen;
