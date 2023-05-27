import ITransaction from '@/logic/core/finances/Transaction';
import { SummaryItemComponent } from './SummaryItemComponent';
import {
  IconArrowsDoubleSwNe,
  IconCash,
  IconCreditCard,
} from '@tabler/icons-react';
import { ETransactionType } from '@/logic/core/finances/ETransactionType';

interface SummaryProps {
  transactions: ITransaction[];
  className?: string;
}

export const SummaryComponent: React.FC<SummaryProps> = (props) => {
  const totalize = (total: number, r: ITransaction) => total + r.value;

  const incomings = props.transactions
    .filter((r) => r.type === ETransactionType.INCOME)
    .reduce(totalize, 0);

  const expenses = props.transactions
    .filter((r) => r.type === ETransactionType.EXPENSE)
    .reduce(totalize, 0);

  const total = incomings - expenses;

  return (
    <div
      className={`
            grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 sm:mb-4
        `}
    >
      <SummaryItemComponent
        title='Receitas'
        value={incomings}
        icon={<IconCash />}
        iconClassName='text-green-500'
      />
      <SummaryItemComponent
        title='Despesas'
        value={expenses}
        icon={<IconCreditCard />}
        iconClassName='text-red-500'
      />
      <SummaryItemComponent
        title='Total'
        value={total}
        icon={<IconArrowsDoubleSwNe />}
        iconClassName='text-yellow-500'
        valueClassName={
          total > 0 ? 'text-green-500' : total < 0 ? 'text-red-500' : ''
        }
      />
    </div>
  );
};
