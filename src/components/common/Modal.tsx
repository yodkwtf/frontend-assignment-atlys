import styled from 'styled-components';
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
    <Wrapper className={`${showModal ? 'show' : null}`}>
      <div className="children">
        {children}
        <div className="cross-btn">
          <button onClick={() => setShowModal(false)}>
            <LiaTimesSolid />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s linear;
  z-index: 999;

  &.show {
    visibility: visible;
    opacity: 1;
  }

  .children {
    position: relative;
  }

  .cross-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #131319;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    z-index: 1000;

    button {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
    }
  }
`;

export default Modal;
