import { AreaComponent } from '../common/AreaComponent';
import { SloganComponent } from './SloganComponent';
import principal from '../../../../public/calculating-cost-principal.webp';
import { ResponsiveImageComponent } from '../common/ResponsiveImageComponent';

export const HighlightComponent: React.FC = () => {
  return (
    <AreaComponent
      id='inicio'
      className='pt-20'
    >
      <div className='flex h-[500px] items-center justify-around'>
        <SloganComponent />
        <ResponsiveImageComponent
          image={principal}
          className='rotate-3 hidden md:inline'
        />
      </div>
    </AreaComponent>
  );
};
