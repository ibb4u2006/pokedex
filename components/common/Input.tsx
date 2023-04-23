import { AllHTMLAttributes } from 'react';

type InputProps = AllHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...props }) => {
  const { type, placeholder } = props;
  return (
    <label>
      <input
        className="appearance-none w-full max-w-2xl rounded-lg py-7 px-14"
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};

export default Input;
