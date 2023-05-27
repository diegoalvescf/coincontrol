interface ContentProps {
  children: any;
  className?: string;
}
export const ContentComponent: React.FC<ContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex flex-col p-7 ${className ?? ''}`}>{children}</div>
  );
};
