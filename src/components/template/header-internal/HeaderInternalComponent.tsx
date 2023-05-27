import { UserMenuComponent } from './UserMenuComponent';
import { WelcomeComponent } from './WelcomeComponent';

export const HeaderInternalComponent: React.FC = () => {
  return (
    <div className='flex justify-between items-center p-7 border-b border-zinc-900'>
      <WelcomeComponent />
      <UserMenuComponent />
    </div>
  );
};
