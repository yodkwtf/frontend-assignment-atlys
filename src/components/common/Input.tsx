import styled from 'styled-components';

interface InputProps {
  labelFor: string;
  primaryLabel: string;
  secondaryLabel?: string;
  inputType?: string;
  placeholder: string;
}

const Input = ({
  labelFor,
  primaryLabel,
  secondaryLabel,
  inputType = 'text',
  placeholder,
}: InputProps) => {
  return (
    <InputWrapper>
      <label htmlFor={labelFor}>
        <span>{primaryLabel}</span>
        <small>{secondaryLabel}</small>
      </label>
      <input type={inputType} placeholder={placeholder} />
    </InputWrapper>
  );
};
export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: #c5c7ca;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;

    small {
      font-size: 0.75rem;
      cursor: pointer;
    }
  }

  input {
    background: transparent;
    min-width: 415px;
    border: 1.5px solid #35373b;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;

    &::placeholder {
      color: #7f8084;
    }
  }
`;
