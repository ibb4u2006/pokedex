import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  children,
  ...props
}) => {
  const isVertical = direction === 'vertical';
  return (
    <div className={classNames('flex', { 'flex-col': isVertical })} {...props}>
      {children}
    </div>
  );
};

export default Stack;
