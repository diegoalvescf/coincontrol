import useForm from '@/data/hooks/useForm';
import useNotification from '@/data/hooks/useNotification';
import { ETransactionType } from '@/logic/core/finances/ETransactionType';
import ITransaction from '@/logic/core/finances/Transaction';

import MoneyFormatting from '@/logic/utils/MoneyFormatting';
import TextInputValidator from '@/logic/utils/TextInputValidator';
import { Button, Group, Radio, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import 'dayjs/locale/pt-br';
import 'react-toastify/dist/ReactToastify.css';

interface FormProps {
  transaction: ITransaction;
  save?: (transaction: ITransaction) => void;
  remove?: (transaction: ITransaction) => void;
  cancel?: () => void;
}

export const FormFinance: React.FC<FormProps> = (props) => {
  const { data, changeAttribute } = useForm<ITransaction>(props.transaction);
  const notification = useNotification();

  const handleSave = (transaction: ITransaction) => {
    props.save?.(transaction);

    notification.showSuccessNotification('Dados salvos com sucesso');
  };

  const handleRemove = (transaction: ITransaction) => {
    if (window.confirm('Deseja mesmo excluir ?')) {
      props.remove?.(transaction);
      notification.showSuccessNotification('Dado excluído com sucesso');
    } else {
      props.cancel;
    }
  };

  return (
    <div
      className={`
        flex flex-col
        border border-zinc-700
        rounded-xl overflow-hidden 
      `}
    >
      <div className='bg-black py-3 px-7 text-zinc-400'>Formulário</div>

      <div className='flex flex-col gap-4 p-4 sm:p-7'>
        <TextInput
          label='Descrição'
          value={data?.description}
          onChange={changeAttribute('description')}
          disabled={TextInputValidator.between(data.description, 2, 80)}
        />

        <TextInput
          label='Valor'
          value={MoneyFormatting.format(data?.value)}
          onChange={changeAttribute('value', MoneyFormatting.unformat)}
        />

        <DatePickerInput
          label='Data'
          value={data?.transactionDate}
          onChange={changeAttribute('transactionDate')}
          locale='pt-BR'
          valueFormat='DD/MM/YYYY'
        />

        <Radio.Group
          value={data?.type}
          onChange={changeAttribute('type')}
        >
          <Group>
            <Radio
              value={ETransactionType.INCOME}
              label='Receitas'
            />
            <Radio
              value={ETransactionType.EXPENSE}
              label='Despesas'
            />
          </Group>
        </Radio.Group>
      </div>

      <div className='flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800'>
        <Button
          className='bg-green-500'
          color='green'
          onClick={() => handleSave(data)}
          disabled={data.value === 0}
        >
          Salvar
        </Button>
        <Button
          className='bg-zinc-500'
          color='gray'
          onClick={props.cancel}
        >
          Voltar
        </Button>

        <div className='flex-1'></div>
        {data?.id && (
          <Button
            className='bg-red-500'
            color='red'
            onClick={() => handleRemove(data)}
          >
            Excluir
          </Button>
        )}
      </div>
    </div>
  );
};
