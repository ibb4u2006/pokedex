import classNames from 'classnames';
import { AllHTMLAttributes } from 'react';

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outline' | 'none';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  isActive = false,
  variant = 'outline',
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        `p-2  min-w-11 rounded-lg  disabled:cursor-not-allowed disabled:opacity-40 ${className}`,
        {
          'border-black text-black': isActive,
          'border-grey-300 text-grey-300': !isActive,
          'border-2': variant === 'outline',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
