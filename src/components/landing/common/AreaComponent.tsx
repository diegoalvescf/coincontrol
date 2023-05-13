interface AreaProps {
  children: any;
  className?: string;
  id?: string;
}

export const AreaComponent: React.FC<AreaProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <div
      id={id ?? ''}
      className={`
      flex justify-center w-full
      ${className ?? ''}
    `}
    >
      <div
        className={`
        px-7 xl:px-0
        w-full xl:w-[1200px]
      `}
      >
        {children}
      </div>
    </div>
  );
};
