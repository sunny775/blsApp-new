import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text, TextInput} from 'react-native-paper';

const DepositModal = (props, ref) => {
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
      firstName: 'sonnie',
      lastName: 'clette',
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
          <Text>{modalData?.plan.interval + -+modalData?.plan.amount}</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                label="firstname"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                mode="outlined"
                label="lastname"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />

          <Dialog.Actions>
            <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            <Button onPress={() => console.log('Ok')}>Ok</Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

export default forwardRef(DepositModal);

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
