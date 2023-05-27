import AuthContext from '@/data/contexts/AuthContext';
import { useContext } from 'react';

export const WelcomeComponent: React.FC = () => {
  const { user } = useContext(AuthContext);

  const renderName = () => {
    return (
      <span className='hidden sm:inline'>{user?.name?.split(' ')[0]}</span>
    );
  };

  return <div className={`text-3xl font-black`}>Olá {renderName()} 👋</div>;
};
