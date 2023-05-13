import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { SocialNetworkItemComponent } from '../common/SocialNetworkItemComponent';

export const SocialNetworksComponent: React.FC = () => {
  return (
    <div className='flex'>
      <SocialNetworkItemComponent
        icon={<IconBrandGithub />}
        url='https://github.com/diegoalvescf'
      />

      <SocialNetworkItemComponent
        icon={<IconBrandInstagram />}
        url='https://www.instagram.com/alvesdev/'
      />

      <SocialNetworkItemComponent
        icon={<IconBrandLinkedin />}
        url='https://www.linkedin.com/in/dalvesdev/'
      />

      <SocialNetworkItemComponent
        icon={<IconBrandTiktok />}
        url='https://www.tiktok.com/@dalvesdev'
      />

      <SocialNetworkItemComponent
        icon={<IconBrandYoutube />}
        url='https://www.youtube.com/@alvesdev'
      />
    </div>
  );
};
