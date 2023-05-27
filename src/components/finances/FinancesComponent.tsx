import { ETransactionType } from '@/logic/core/finances/ETransactionType';
import ITransaction from '@/logic/core/finances/Transaction';
import DateFormatting from '@/logic/utils/DateFormatting';
import MoneyFormatting from '@/logic/utils/MoneyFormatting';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

interface FinancesProps {
  transactions: ITransaction[];
  selectTransaction?: (transaction: ITransaction) => void;
}

export const FinancesComponent: React.FC<FinancesProps> = ({
  transactions,
  selectTransaction,
}) => {
  const renderType = (transaction: ITransaction) => {
    return (
      <span
        className={`
          flex 
          justify-center items-center 
          h-8 w-8 sm:w-10 sm:h-10 p-1.5 rounded-full 
          ${
            transaction.type === ETransactionType.INCOME
              ? 'bg-green-500'
              : 'bg-red-500'
          }
        `}
      >
        {transaction.type === ETransactionType.INCOME ? (
          <IconTrendingUp />
        ) : (
          <IconTrendingDown />
        )}
      </span>
    );
  };

  const renderLine = (transaction: ITransaction, index: number) => {
    return (
      <div
        key={transaction.id}
        className={`
          flex items-center 
          gap-3 p-3
          cursor-pointer
          ${index % 2 === 0 ? 'bg-slate-900' : 'bg-zinc-800'}
        `}
        onClick={() => selectTransaction?.(transaction)}
      >
        {renderType(transaction)}
        <span className='w-full md:w-1/2'>{transaction.description}</span>

        <span className='hidden md:inline flex-1'>
          {DateFormatting.ddmmyy.format(transaction.transactionDate)}
        </span>

        <span>{MoneyFormatting.format(transaction.value)}</span>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col border border-zinc-700 rounded-xl overflow-hidden mt-4`}
    >
      {transactions.map(renderLine)}
    </div>
  );
};
