import { ETransactionType } from '@/logic/core/finances/ETransactionType';
import ITransaction from '@/logic/core/finances/Transaction';
import DateFormatting from '@/logic/utils/DateFormatting';
import MoneyFormatting from '@/logic/utils/MoneyFormatting';

import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

interface GridProps {
  transactions: ITransaction[];
  selectTransaction?: (transaction: ITransaction) => void;
}

export const GridComponent: React.FC<GridProps> = (props) => {
  const renderItem = (transaction: ITransaction) => {
    return (
      <div
        className={`
                relative flex flex-col justify-between rounded-lg p-4 
                text-white overflow-hidden h-24 cursor-pointer
            `}
        onClick={() => props.selectTransaction?.(transaction)}
      >
        <div
          className={`
                    absolute top-0 left-0 w-full h-full
                    bg-gradient-to-r opacity-60
                    ${
                      transaction.type === ETransactionType.INCOME
                        ? 'from-teal-500 via-green-600 to-teal-700'
                        : 'from-pink-500 via-red-600 to-pink-700'
                    }
                `}
        ></div>
        <div className='flex justify-between items-center'>
          <span className='z-10 font-light opacity-75'>
            {transaction.description}
          </span>
          <span className='z-10 font-light text-xs opacity-75'>
            {DateFormatting.ddmm.format(transaction.transactionDate)}
          </span>
        </div>
        <span className='z-10 text-3xl font-black'>
          {MoneyFormatting.format(transaction.value)}
        </span>
        {transaction.type === ETransactionType.INCOME ? (
          <IconTrendingUp
            size={40}
            stroke={1}
            className='absolute bottom-1 right-2 text-white opacity-10'
          />
        ) : (
          <IconTrendingDown
            size={40}
            stroke={1}
            className='absolute bottom-1 right-2 text-white opacity-10'
          />
        )}
      </div>
    );
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5'>
      {props.transactions.map(renderItem)}
    </div>
  );
};
