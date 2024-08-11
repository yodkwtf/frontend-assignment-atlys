import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  buttonText: string;
  handleClick?: (e: React.MouseEvent) => void;
  classes?: string[];
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  buttonText,
  handleClick = () => {},
  classes = [],
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-custom-button text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 hover:bg-custom-button-hover ${classes.join(
        ' '
      )}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
