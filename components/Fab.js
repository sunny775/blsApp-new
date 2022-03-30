import * as React from 'react';
import {FAB} from 'react-native-paper';

const MyComponent = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <FAB.Group
      open={open}
      icon={open ? 'view-module' : 'plus'}
      actions={[
        {
          icon: 'email',
          label: 'Messages',
          onPress: () => console.log('Pressed messages'),
        },
        {
          icon: 'plus',
          label: 'New Account',
          onPress: () => console.log('Pressed add account'),
        },
        {
          icon: 'wallet-plus',
          label: 'Deposit Request',
          onPress: () => console.log('Pressed deposit'),
        },

        {
          icon: 'wallet',
          label: 'Withdraw Funds',
          onPress: () => console.log('Pressed withdrawal'),
          small: false,
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default MyComponent;
