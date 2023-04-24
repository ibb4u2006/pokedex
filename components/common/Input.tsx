import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { AllHTMLAttributes } from 'react';

interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  onCancelClick: () => void;
}

const Input: React.FC<InputProps> = ({ onCancelClick, ...props }) => {
  const { value, type, placeholder } = props;
  return (
    <label className="relative block  w-full max-w-2xl mx-auto text-grey-300">
      <MagnifyingGlassIcon width={24} className="absolute top-5 left-10" />
      <input
        className="appearance-none w-full rounded-lg py-5 px-14 pl-24"
        value={value}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      <XMarkIcon
        width={24}
        onClick={onCancelClick}
        className="cursor-pointer absolute right-10 top-5"
      />
    </label>
  );
};

export default Input;
