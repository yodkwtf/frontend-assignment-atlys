import useAppContext from '../../hooks/useAppContext';
import { LiaTimesSolid } from 'react-icons/lia';

const Modal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { showModal, closeModal } = useAppContext();

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 grid place-items-center ${
        showModal ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-all duration-500 z-50`}
    >
      <div className="relative">
        {children}
        <div className="absolute top-4 right-4 bg-custom-darkest rounded-full w-8 h-8 z-50">
          <button
            className="grid place-items-center w-full h-full z-51 text-white"
            onClick={closeModal}
          >
            <LiaTimesSolid />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
