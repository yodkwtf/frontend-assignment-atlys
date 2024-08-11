import styled from 'styled-components';
import Login from '../components/Login';
import Register from '../components/Register';
import Logo from '../components/Logo';
import { useAppContext } from '../context';

interface AppContextType {
  showLogin: boolean;
}

const Auth: React.FC = () => {
  const { showLogin } = useAppContext() as AppContextType;

  return (
    <Container>
      <div>
        <div className="logo-container">
          <Logo />
        </div>

        {showLogin ? <Login /> : <Register />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  background: #131319;

  .logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

export default Auth;
