import Image from 'next/image';

interface ImageResponsiveProps {
  image: any;
  className?: string;
}

export const ResponsiveImageComponent: React.FC<ImageResponsiveProps> = ({
  image,
  className,
}) => {
  return (
    <Image
      src={image}
      alt='Imagem'
      loading='lazy'
      className={`
        w-[100%] h-[120px] 
        sm:w-[200px] sm:h-[365px]
        md:w-[350px] md:h-[365px]
        lg:w-[550px] lg:h-[365px]
        rounded-xl object-cover
        ${className ?? ''}
      `}
    />
  );
};
