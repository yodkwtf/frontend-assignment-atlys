import styled from 'styled-components';
import Button from './common/Button';
import Input from './common/Input';
import { useAppContext } from '../context';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

interface AppContextType {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const Register: React.FC = () => {
  const { setShowLogin } = useAppContext() as AppContextType;

  const navigate = useNavigate();

  return (
    <RegisterWrapper>
      <h5>sign up</h5>
      <h3>Create an account to continue</h3>

      <form>
        <div className="form-elements">
          <Input
            labelFor="email"
            primaryLabel="Email"
            inputType="email"
            placeholder="Enter your email"
          />
          <Input
            labelFor="username"
            primaryLabel="Username"
            inputType="text"
            placeholder="Choose a preferred username"
          />
          <Input
            labelFor="password"
            primaryLabel="Password"
            inputType="password"
            placeholder="Choose a strong password"
          />
          <Button
            type="submit"
            buttonText="Continue"
            handleClick={(e) => {
              e.preventDefault();
              navigate('/posts');
            }}
          />
        </div>

        <p className="form-footer">
          Already have an account?{' '}
          <span onClick={() => setShowLogin(true)}>
            Login <FaArrowRight />
          </span>
        </p>
      </form>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
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
      display: inline;
      color: #c5c7ca;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export default Register;
