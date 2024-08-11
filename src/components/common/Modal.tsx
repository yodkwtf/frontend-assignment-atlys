import React from 'react';
import { useAppContext } from '../../context';
import { LiaTimesSolid } from 'react-icons/lia';

interface ModalProps {
  children: React.ReactNode;
}

type AppContextType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { showModal, setShowModal } = useAppContext() as AppContextType;
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 grid place-items-center ${
        showModal ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-all duration-500 z-50`}
    >
      <div className="relative">
        {children}
        <div className="absolute top-4 right-4 bg-[#131319] rounded-full w-8 h-8 z-50">
          <button
            className="grid place-items-center w-full h-full z-51 text-white"
            onClick={() => setShowModal(false)}
          >
            <LiaTimesSolid />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
