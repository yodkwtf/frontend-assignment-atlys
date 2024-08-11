import React from 'react';
import styled from 'styled-components';

import { FaArrowRight } from 'react-icons/fa';
import { Button, Input } from './common';
import useAppContext from '../hooks/useAppContext';

const Register: React.FC = () => {
  const { openLogin, handleSubmit } = useAppContext();

  return (
    <Wrapper>
      <h5 className="text-custom-muted text-center uppercase text-sm">
        Sign up
      </h5>
      <h3 className="text-white text-lg font-medium my-0 mb-8 text-center">
        Create an account to continue
      </h3>
      <form>
        <div className="flex flex-col gap-4">
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
            handleClick={handleSubmit}
          />
        </div>
        <p className="cursor-pointer text-sm mt-4 text-custom-secondary flex gap-1">
          Already have an account?{' '}
          <span
            className="text-custom-primary flex items-center gap-1"
            onClick={openLogin}
          >
            Login <FaArrowRight />
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

export default Register;
