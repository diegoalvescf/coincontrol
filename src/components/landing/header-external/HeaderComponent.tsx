import { AreaComponent } from '../common/AreaComponent';
import { LogoComponent } from '../common/LogoComponent';
import { MenuComponent } from './MenuComponent';

export const HeaderComponent: React.FC = () => {
  return (
    <AreaComponent className='bg-black fixed z-50 bg-opacity-50'>
      <div className='flex items-center justify-between h-20'>
        <LogoComponent />
        <MenuComponent />
      </div>
    </AreaComponent>
  );
};
