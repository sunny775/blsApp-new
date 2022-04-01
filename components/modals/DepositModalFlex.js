import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text, TextInput} from 'react-native-paper';

const DepositModalFlex = (props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useImperativeHandle(ref, () => ({
    openModal: value => {
      setIsModalOpen(true);
      setModalData(value);
    },
  }));

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      amount: '',
    },
  });
  const onSubmit = data => console.log(data);

  return (
    <Portal>
      <Dialog
        visible={isModalOpen}
        onDismiss={() => setIsModalOpen(false)}
        style={styles.root}>
        <Dialog.Content>
          <Text>Enter the Amount you wish to deposit</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                label="Amount"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="amount"
          />
          {errors.amount && <Text>This is required.</Text>}

          <Dialog.Actions>
            <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Confirm</Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default forwardRef(DepositModalFlex);

const styles = StyleSheet.create({
  root: {
    padding: 8,
  },
  modalContent: {
    padding: 8,
    borderRadius: 8,
  },
  input: {
    marginVertical: 8,
  },
});
