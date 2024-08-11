import styled from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  buttonText: string;
  handleClick?: () => void;
};

const Button = ({
  type = 'button',
  buttonText,
  handleClick = () => {},
}: ButtonProps) => {
  return (
    <ButtonWrapper type={type} onClick={handleClick}>
      {buttonText}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  background: #4a96ff;
  color: #ffffff;
  width: 100%;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: #1d4ed8;
  }
`;

export default Button;
