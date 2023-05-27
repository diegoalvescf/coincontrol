import { FinancesPage } from '@/components/finances';
import { LandingPage } from '@/components/landing';
import { LoadingComponent } from '@/components/template/loading/LoadingComponent';
import AuthContext from '@/data/contexts/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingComponent />;

  return user ? <FinancesPage /> : <LandingPage />;
}
