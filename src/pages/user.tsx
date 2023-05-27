import { ContentComponent } from '@/components/template/wrappers/ContentComponent';

import { HeaderInternalComponent } from '@/components/template/header-internal/HeaderInternalComponent';
import { TitlePageComponent } from '@/components/template/header-internal/TitlePageComponent';
import { PageComponent } from '@/components/template/wrappers/PageComponent';
import { FormUserComponent } from '@/components/user/FormUserComponent';
import AuthContext from '@/data/contexts/AuthContext';
import { IconForms } from '@tabler/icons-react';
import { useContext } from 'react';

const UserRegisterPage: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <PageComponent>
      <HeaderInternalComponent />
      <ContentComponent>
        <TitlePageComponent
          icon={<IconForms />}
          title={'Dados cadastrais'}
          subtitle={`informações de ${user?.email}`}
        />

        <FormUserComponent />
      </ContentComponent>
    </PageComponent>
  );
};

export default UserRegisterPage;
