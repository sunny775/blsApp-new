import * as React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar, Surface, Title} from 'react-native-paper';

export default function AcccountsTab() {
  return (
    <ScrollView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Surface style={styles.account}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  account: {
    padding: 8,
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
