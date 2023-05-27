import AuthContext from '@/data/contexts/AuthContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LoadingComponent } from '../template/loading/LoadingComponent';

interface IForceAuthProps {
  children: any;
}

export const ForceAuthComponent: React.FC<IForceAuthProps> = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingComponent />;
  } else if (user?.email) {
    return children;
  } else {
    router.push('/');
    return <LoadingComponent />;
  }
};
