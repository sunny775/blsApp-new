import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Paragraph, Portal} from 'react-native-paper';

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
          <Paragraph>
            Confirm request to deposit {modalData?.plan.amount}
          </Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => console.log('Cancel')}>Cancel</Button>
          <Button onPress={() => console.log('Confirm')}>Confirm</Button>
        </Dialog.Actions>
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
