import { FaEye } from 'react-icons/fa';

interface InputProps {
  labelFor: string;
  primaryLabel: string;
  secondaryLabel?: string;
  inputType?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  labelFor,
  primaryLabel,
  secondaryLabel,
  inputType = 'text',
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={labelFor}
        className="flex justify-between items-center text-custom-primary font-semibold text-sm"
      >
        <span>{primaryLabel}</span>
        {secondaryLabel && (
          <small className="text-xs cursor-pointer">{secondaryLabel}</small>
        )}
      </label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className="bg-transparent text-custom-ph min-w-[415px] border-[1.5px] border-custom-b rounded-[0.25rem] p-2 placeholder-custom-ph w-full pr-10"
        />
        {inputType === 'password' && (
          <button
            type="button"
            className="absolute right-2 top-3.5 text-custom-ph"
          >
            <FaEye />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
