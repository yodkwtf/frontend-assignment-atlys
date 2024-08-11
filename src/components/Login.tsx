import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from './common';

const Login: React.FC = () => {
  const { setShowLogin } = useAppContext() as {
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  };
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h5 className="text-[#6b6c70] text-center uppercase text-sm">
        Welcome Back
      </h5>
      <h3 className="text-white text-lg font-medium my-0 mb-8 text-center">
        Log into your account
      </h3>
      <form>
        <div className="flex flex-col gap-4">
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
        <p className="cursor-pointer text-sm mt-4 text-[#7f8084] flex gap-1">
          Not registered yet?{' '}
          <span
            className="text-[#c5c7ca] flex items-center gap-1"
            onClick={() => setShowLogin(false)}
          >
            Register <FaArrowRight />
          </span>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #27292d;
  border-radius: 0.5rem;
  padding: 2.5rem 1.5rem;
  position: relative;
  z-index: 1;

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
    z-index: 0;
    pointer-events: none;
  }
`;

export default Login;
