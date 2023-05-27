import { ForceAuthComponent } from '@/components/authentication/ForceAuthenticationComponent';

interface PageProps {
  external?: boolean;
  children: any;
  className?: string;
}

export const PageComponent: React.FC<PageProps> = ({
  className,
  children,
  external,
}) => {
  const renderPage = () => {
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

  return external ? (
    renderPage()
  ) : (
    <ForceAuthComponent>{renderPage()}</ForceAuthComponent>
  );
};
