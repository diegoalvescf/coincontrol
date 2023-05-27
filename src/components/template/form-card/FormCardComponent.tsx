import { Button } from '@mantine/core';

interface FormCardProps {
  title: string;
  description?: string;
  footerMessage?: string;
  buttonTitle?: string;
  children: any;
  onClick?: () => void;
  disabled?: boolean;
}

export const FormCardComponent: React.FC<FormCardProps> = ({
  children,
  title,
  description,
  footerMessage,
  buttonTitle,
  onClick,
  disabled,
}) => {
  return (
    <div
      className={`
        flex flex-col
        overflow-hidden
        border border-zinc-800 rounded-lg
      `}
    >
      <div className='flex flex-col p-7'>
        <div className='text-3xl font-black'>{title}</div>
        {description && <div className='mt-4 text-zinc-400'>description</div>}
        <div className='mt-3'>{children}</div>
      </div>

      <div className='flex justify-end sm:justify-between items-center bg-black px-7 py-5'>
        {footerMessage && (
          <span className='hidden md:inline text-zinc-400'>
            {footerMessage}
          </span>
        )}

        <Button
          className='bg-green-500 hover:bg-green-600'
          onClick={onClick}
          disabled={disabled}
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};
