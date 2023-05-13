import { IconBrandGoogle } from '@tabler/icons-react';
import { MenuItemComponent } from './MenuItemComponent';

export const MenuComponent: React.FC = () => {
  const handleLoginWithGoogle = () => {
    console.log('👽 👉 login google');
  };

  return (
    <div className='flex gap-2'>
      <MenuItemComponent
        url='#inicio'
        className='hidden sm:flex'
      >
        Início
      </MenuItemComponent>

      <MenuItemComponent
        url='#vantagens'
        className='hidden sm:flex'
      >
        Vantagens
      </MenuItemComponent>

      <MenuItemComponent
        url='#depoimentos'
        className='hidden sm:flex'
      >
        Depoimentos
      </MenuItemComponent>

      <MenuItemComponent
        className='bg-gradient-to-r from-indigo-600 to-cyan-600'
        onClick={handleLoginWithGoogle}
      >
        <div className='flex items-center gap-2'>
          <IconBrandGoogle size={15} />
          <span>Login</span>
        </div>
      </MenuItemComponent>
    </div>
  );
};
