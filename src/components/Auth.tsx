import { useAppContext } from '../context';
import Login from './Login';
import Register from './Register';

interface AppContextType {
  showLogin: boolean;
}

const Auth: React.FC = () => {
  const { showLogin } = useAppContext() as AppContextType;

  return <>{showLogin ? <Login /> : <Register />}</>;
};

export default Auth;
