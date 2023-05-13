import { AreaComponent } from '../common/AreaComponent';
import { LogoComponent } from '../common/LogoComponent';
import { SocialNetworksComponent } from './SocialNetworksComponent';

export const FooterComponent: React.FC = () => {
  return (
    <AreaComponent className='bg-black py-20'>
      <div className='flex flex-col items-center md:items-start '>
        <LogoComponent />

        <div className='mt-3 text-zinc-400 text-center md:text-left'>
          <div>Plataforma financeira</div>
          <div className='flex gap-1.5'>
            que
            <span className='font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600'>
              simplifica
            </span>
            sua vida
          </div>
        </div>
      </div>
      <div className='flex flex-col md:items-start md:justify-between items-center mt-14'>
        <SocialNetworksComponent />
      </div>
    </AreaComponent>
  );
};
