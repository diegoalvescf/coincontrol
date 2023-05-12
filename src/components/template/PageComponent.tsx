interface PageProps {
  external?: boolean;
  children: any;
  className?: string;
}

export const PageComponent: React.FC<PageProps> = ({ className, children }) => {
  return (
    <div
      className={`
      flex
      flex-col
      min-h-screen
      bg-gradient-to-r from-zinc-900 via-black to-zinc-900
      ${className ?? ''}
    `}
    >
      {children}
    </div>
  );
};
