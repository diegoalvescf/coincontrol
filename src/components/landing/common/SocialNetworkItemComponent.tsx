import Link from 'next/link';
import React from 'react';

export interface SocialNetworkProps {
  icon?: any;
  url: string;
}

export const SocialNetworkItemComponent: React.FC<SocialNetworkProps> = ({
  url,
  icon,
}) => {
  return (
    <Link
      href={url}
      target='_blank'
    >
      <div className='bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer'>
        {React.cloneElement(icon, {
          size: 35,
          strokeWidth: 1,
          className: 'text-indigo-400',
        })}
      </div>
    </Link>
  );
};
