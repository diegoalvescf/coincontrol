import Image from 'next/image';
import { PageComponent } from '../wrappers/PageComponent';
import loading from '../../../../public/loading.gif';

export const LoadingComponent: React.FC = () => {
  return (
    <PageComponent
      external
      className='justify-center items-center'
    >
      <Image
        priority
        src={loading}
        alt='loading'
        width={40}
        height={40}
      />
    </PageComponent>
  );
};
