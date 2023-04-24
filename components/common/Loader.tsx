import { AllHTMLAttributes, FC, ReactNode } from 'react';
import Stack from './Stack';

interface ILoader extends AllHTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  children: ReactNode;
}

const Loader: FC<ILoader> = ({ isLoading, children, ...props }) => {
  if (isLoading) {
    return (
      <Stack className=" h-40 w-40 items-center justify-center" {...props}>
        <Stack className="h-16 w-16 animate-spin items-center justify-center rounded-full bg-gradient-to-r from-red to-red-100">
          <div className="h-14 w-14 rounded-full bg-white"></div>
        </Stack>
      </Stack>
    );
  }
  return <>{children}</>;
};

export default Loader;
