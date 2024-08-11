import styled from 'styled-components';
import Button from './common/Button';
import Input from './common/Input';
import { useAppContext } from '../context';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

interface AppContextType {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const Login: React.FC = () => {
  const { setShowLogin, setShowModal, showModal } =
    useAppContext() as AppContextType;

  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <h5>Welcome Back</h5>
      <h3>Log into your account</h3>

      <form>
        <div className="form-elements">
          <Input
            labelFor="email"
            primaryLabel="Email or Username"
            inputType="email"
            placeholder="Enter your email or username"
          />
          <Input
            labelFor="password"
            primaryLabel="Password"
            secondaryLabel="Forgot password?"
            inputType="password"
            placeholder="Enter your password"
          />
          <Button
            type="submit"
            buttonText="Login"
            handleClick={(e) => {
              e.preventDefault();
              navigate('/posts');
            }}
          />
        </div>

        <p className="form-footer">
          Not registered yet?{' '}
          <span onClick={() => setShowLogin(false)}>
            Register <FaArrowRight />
          </span>
        </p>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  background-color: #27292d;
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  position: relative;
  z-index: 1; /* Ensure this is above the ::before pseudo-element */

  h5 {
    color: #6b6c70;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
  }

  h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(to bottom right, #969696, #343434);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: 0; /* Ensure this is behind the content */
    pointer-events: none; /* Prevent it from intercepting clicks */
  }

  .form-elements {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-footer {
    cursor: pointer;
    font-size: 14px;
    margin-top: 1rem;
    color: #7f8084;
    display: flex;
    gap: 0.25rem;

    span {
      color: #c5c7ca;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export default Login;
