import { useState } from 'react';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

function AddCabin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}>
        Add new cabin
      </Button>

      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          <CreateCabinForm onCloseModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
