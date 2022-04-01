import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import Fab from '../../Fab';
import AccountsTab from './AccountsTab';
import ProfileInfo from './ProfileInfo';
import TransactionsTab from './Transactions';

const Home = () => {
  const theme = useTheme();
  const Tab = createMaterialTopTabNavigator();

  return (
    <React.Fragment>
      <ProfileInfo />
      <Tab.Navigator
        initialRouteName="Accounts"
        screenOptions={{
          tabBarActiveTintColor: theme?.colors.primary,
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: theme?.colors.surface},
        }}>
        <Tab.Screen
          name="Accounts"
          component={AccountsTab}
          options={{tabBarLabel: 'My Accounts'}}
        />
        <Tab.Screen
          name="Transactions"
          component={TransactionsTab}
          options={{tabBarLabel: 'Transactions'}}
        />
      </Tab.Navigator>
      <Fab />
    </React.Fragment>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
