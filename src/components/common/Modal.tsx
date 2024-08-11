interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-md w-full">
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
