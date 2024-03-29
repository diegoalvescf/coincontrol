import { ResponsiveImageComponent } from '../common/ResponsiveImageComponent';

export interface AdvantageItemProps {
  image: any;
  title: string;
  subtitle?: string;
  reverse?: boolean;
}

export const AdvantageItemComponente: React.FC<AdvantageItemProps> = ({
  image,
  title,
  reverse,
  subtitle,
}) => {
  return (
    <div
      className={`flex flex-col justify-around items-center w-full gap-6 ${
        reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
    >
      <ResponsiveImageComponent
        image={image}
        className={`${reverse ? 'sm:rotate-6' : 'sm:-rotate-6'}`}
      />

      <div className='flex flex-col gap-y-6 sm:w-[350px] text-center sm:text-left'>
        <div
          className={`
            flex flex-col text-white
            font-black text-2xl sm:text-4xl
          `}
        >
          {title}
        </div>

        {subtitle && (
          <span className='font-light text-base sm:text-lg text-zinc-500'>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
