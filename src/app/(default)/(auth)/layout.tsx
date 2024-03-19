import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='p-10 rounded-md'>
    <main className='h-screen flex flex-col justify-center items-center'>
      {children}
    </main></div>;
};

export default AuthLayout;
