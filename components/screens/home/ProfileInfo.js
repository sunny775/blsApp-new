import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Surface, Text, Title} from 'react-native-paper';

const ProfileInfo = ({profile}) => (
  <Surface style={styles.surface}>
    <View style={{flex: 1}}>
      {profile?.avatar ? (
        <Avatar.Image size={100} source={profile.avatar} />
      ) : (
        <Avatar.Text size={100} label="XD" />
      )}
    </View>
    <View style={{flex: 2}}>
      <Title>Nkwuda Sunday Cletus</Title>
      <Text>+2347069746873</Text>
    </View>
  </Surface>
);

export default ProfileInfo;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
