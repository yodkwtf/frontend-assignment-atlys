import useAppContext from '../hooks/useAppContext';
import Login from './Login';
import Register from './Register';

const Auth: React.FC = () => {
  const { showLogin } = useAppContext();

  return <>{showLogin ? <Login /> : <Register />}</>;
};

export default Auth;
