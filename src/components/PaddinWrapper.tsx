import { ReactNode } from 'react';

interface PaddinWrapperProps {
  children?: ReactNode;
}

const PaddinWrapper = ({ children }: PaddinWrapperProps) => {
  return <div className="px-4 md:px-14">{children}</div>;
};

export default PaddinWrapper;
