import Login from '../components/Login';
import Register from '../components/Register';
import { useAppContext } from '../context';

interface AppContextType {
  showLogin: boolean;
}

const Auth: React.FC = () => {
  const { showLogin } = useAppContext() as AppContextType;

  return <>{showLogin ? <Login /> : <Register />}</>;
};

export default Auth;
