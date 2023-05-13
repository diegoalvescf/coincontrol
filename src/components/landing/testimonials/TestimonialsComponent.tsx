import { AreaComponent } from '../common/AreaComponent';
import { TestimonialItemComponent } from './TestimonialItemComponent';
import { TestimonialDATA } from './data';

export const TestimonialsComponent: React.FC = () => {
  return (
    <AreaComponent
      id='depoimentos'
      className={`
          bg-gradient-to-r from-black via-zinc-900 to-black
          py-10 sm:py-20
      `}
    >
      <div className={`flex flex-col justify-center items-center`}>
        <h2 className='font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center'>
          As pessoas estão dizendo...
        </h2>

        <div className='flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap'>
          {TestimonialDATA.map((item) => (
            <TestimonialItemComponent
              key={item.id}
              id={item.id}
              name={item.name}
              avatar={item.avatar}
              highlight={item.highlight}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </AreaComponent>
  );
};
