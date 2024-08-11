import React from 'react';

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
        className="flex justify-between items-center text-[#c5c7ca] font-semibold text-sm"
      >
        <span>{primaryLabel}</span>
        {secondaryLabel && (
          <small className="text-xs cursor-pointer">{secondaryLabel}</small>
        )}
      </label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="bg-transparent min-w-[415px] border-[1.5px] border-[#35373b] rounded-[0.25rem] p-2 placeholder-[#7f8084]"
      />
    </div>
  );
};

export default Input;
