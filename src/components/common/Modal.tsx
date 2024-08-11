import styled from 'styled-components';
import { useAppContext } from '../../context';

interface ModalProps {
  children: React.ReactNode;
}

type AppContextType = {
  showModal: boolean;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { showModal } = useAppContext() as AppContextType;
  return (
    <Wrapper className={`${showModal ? 'show' : null}`}>{children}</Wrapper>
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
  transition: all 2s linear;
  z-index: 999;

  &.show {
    visibility: visible;
    opacity: 1;
  }
`;

export default Modal;
