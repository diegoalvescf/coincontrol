import AuthContext from '@/data/contexts/AuthContext';
import useForm from '@/data/hooks/useForm';
import useNotification from '@/data/hooks/useNotification';
import { IUser } from '@/logic/core/user/IUser';
import CpfValidator from '@/logic/utils/DocumentValidator';
import FormatPhone from '@/logic/utils/FormatPhone';
import TextInputValidator from '@/logic/utils/TextInputValidator';
import { TextInput } from '@mantine/core';
import { useContext, useEffect } from 'react';
import { FormCardComponent } from '../template/form-card/FormCardComponent';

export const FormUserComponent: React.FC = () => {
  const { user, updateUser } = useContext(AuthContext);
  const { data, changeAttribute, changeData } = useForm<IUser>();
  const notification = useNotification();

  useEffect(() => {
    if (!user) return;
    changeData(user);
  }, [user, changeData]);

  async function save() {
    if (!user) return;
    await updateUser(data);
    notification.showSuccessNotification('Cadastro alterado com sucesso!');
  }

  return (
    <div className='flex flex-col gap-5 mt-7'>
      <FormCardComponent
        title='Seu Nome'
        description='Como você gostaria de ser chamado?'
        buttonTitle='Salvar'
        footerMessage='O nome deve possuir entre 3 e 80 caracteres, mais que isso já é um texto!'
        onClick={save}
        disabled={TextInputValidator.between(data.name, 2, 80)}
      >
        <TextInput
          value={data.name}
          onChange={changeAttribute('name')}
        />
      </FormCardComponent>

      <FormCardComponent
        title='CPF'
        description='Seu CPF é usado internamente pelo sistema.'
        footerMessage='Pode relaxar, daqui ele não sai!'
        buttonTitle='Salvar'
        onClick={save}
        disabled={
          data.cpf ? TextInputValidator.between(data.cpf, 11, 20) : false
        }
      >
        <TextInput
          value={CpfValidator.format(data.cpf ?? '')}
          onChange={changeAttribute('cpf', CpfValidator.unformat)}
        />
      </FormCardComponent>

      <FormCardComponent
        title='Telefone'
        description='Usado para notificações importantes sobre a sua conta.'
        footerMessage='Se receber ligação a cobrar, não foi a gente!'
        buttonTitle='Salvar'
        onClick={save}
        disabled={
          data.phone ? TextInputValidator.between(data.phone, 11, 20) : false
        }
      >
        <TextInput
          value={FormatPhone.format(data.phone ?? '')}
          onChange={changeAttribute('phone', FormatPhone.unformat)}
        />
      </FormCardComponent>
    </div>
  );
};
