import React, {useRef} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {
  Surface,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import DepositModal from '../../modals/DepositModal';
import DepositModalFlex from '../../modals/DepositModalFlex';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const hapticFeedback = () =>
  ReactNativeHapticFeedback.trigger('impactHeavy', options);

const userAccountsMock = [
  {
    id: 'AOB76ED',
    plan: {interval: 'daily', amount: 500},
    balance: 4500,
  },
  {
    id: 'AOB76ED',
    plan: {interval: 'daily', amount: 'flex'},
    balance: 7800,
  },
  {
    id: 'AOB76ED',
    plan: {interval: 'weekly', amount: 2000},
    balance: 12000,
  },
  {
    id: 'AOB76ED',
    plan: {interval: 'monthly', amount: 7000},
    balance: 28000,
  },
];

function Account({account}) {
  const theme = useTheme();

  const modalRef = useRef(null);
  const modalFlexRef = useRef(null);

  const handleOpenModal = value => {
    modalRef.current.openModal(value);
    hapticFeedback();
  };

  const handleOpenModalFlex = value => {
    modalFlexRef.current.openModal(value);
    hapticFeedback();
  };
  return (
    <Surface style={styles.account}>
      <TouchableRipple
        onPress={() => null}
        onLongPress={() =>
          account?.plan.amount === 'flex'
            ? handleOpenModalFlex(account)
            : handleOpenModal(account)
        }
        delayLongPress={300}
        rippleColor={theme?.colors.ripples}
        style={styles.ripple}>
        <View style={styles.accountDetails}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../../assets/images/shield.png')}
              style={styles.shield}
            />
          </View>
          <View style={{flex: 3}}>
            <View style={styles.accountTitle}>
              <Title style={styles.accountTitleInterval}>
                {account.plan?.interval}-
              </Title>
              <Title style={{color: theme?.colors.primary}}>
                {account.plan?.amount}{' '}
              </Title>
              <Title>{account.id}</Title>
            </View>
            <Text>BAL: ${account.balance}</Text>
          </View>
        </View>
      </TouchableRipple>
      <DepositModal ref={modalRef} />
      <DepositModalFlex ref={modalFlexRef} />
    </Surface>
  );
}

export default function AcccountsTab({profile}) {
  const theme = useTheme();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
      }}>
      {userAccountsMock.map(account => (
        <Account account={account} key={account.id + account.plan?.amount} />
      ))}
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
    margin: 8,
    borderRadius: 8,
    height: 150,

    elevation: 4,
  },
  accountDetails: {
    padding: 8,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ripple: {
    borderRadius: 8,
  },
  shield: {
    width: 60,
    height: 60,
  },
  accountTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountTitleInterval: {
    textTransform: 'uppercase',
  },
});
