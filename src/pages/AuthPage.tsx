import styled from 'styled-components';
import Auth from '../components/Auth';
import Logo from '../components/Logo';

const AuthPage: React.FC = () => {
  return (
    <Container>
      <div>
        <div className="logo-container">
          <Logo />
        </div>

        <Auth />
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

export default AuthPage;
