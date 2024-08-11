import { createContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router';

// Define the shape of the context value
interface AppContextType {
  showLogin: boolean;
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  openModal: () => void;
  closeModal: () => void;
  openLogin: () => void;
  closeLogin: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

// Create a provider component
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  // states
  const [showLogin, setShowLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // functions
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/posts');
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <AppContext.Provider
      value={{
        showLogin,
        setShowLogin,
        showModal,
        setShowModal,
        handleSubmit,
        openModal,
        closeModal,
        openLogin,
        closeLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
