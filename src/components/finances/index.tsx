import { ContentComponent } from '../template/wrappers/ContentComponent';

import { HeaderInternalComponent } from '../template/header-internal/HeaderInternalComponent';
import { FinancesComponent } from './FinancesComponent';

import useTransaction, {
  EDisplayType,
  TDisplayType,
} from '@/data/hooks/useTransaction';
import ITransaction, {
  transactionEmpty,
} from '@/logic/core/finances/Transaction';
import { Button, SegmentedControl } from '@mantine/core';
import { IconLayoutGrid, IconList, IconPlus } from '@tabler/icons-react';
import { DatePickerComponent } from '../template/date-picker/DatePickerComponent';
import { NotFoundSearchComponent } from '../template/not-found-search';
import { PageComponent } from '../template/wrappers/PageComponent';
import { FormFinance } from './Form';
import { GridComponent } from './GridComponent';
import { SummaryComponent } from './SummaryComponent';
import { ToastContainer } from 'react-toastify';

export const FinancesPage: React.FC = () => {
  const {
    transaction,
    transactions,
    save,
    remove,
    setTransaction,
    date,
    changeDate,
    displayType,
    setDisplayType,
  } = useTransaction();

  const renderControls = () => {
    return (
      <div className='flex flex-col sm:flex-row justify-between'>
        <DatePickerComponent
          date={date}
          changeDate={changeDate}
        />

        <div className='flex gap-5 items-center justify-between mt-4 sm:mt-0'>
          <Button
            className=' bg-blue-500'
            leftIcon={<IconPlus />}
            onClick={() => setTransaction(transactionEmpty)}
          >
            Nova Transação
          </Button>

          <SegmentedControl
            data={[
              { label: <IconList />, value: EDisplayType.List },
              { label: <IconLayoutGrid />, value: EDisplayType.Grid },
            ]}
            onChange={(type) => setDisplayType(type as TDisplayType)}
          />
        </div>
      </div>
    );
  };

  const renderTransactions = () => {
    return displayType === EDisplayType.List ? (
      <FinancesComponent
        transactions={transactions}
        selectTransaction={setTransaction}
      />
    ) : (
      <GridComponent transactions={transactions} />
    );
  };

  return (
    <PageComponent>
      <HeaderInternalComponent />
      <ContentComponent className='gap-5'>
        <SummaryComponent transactions={transactions} />

        {transaction ? (
          <FormFinance
            transaction={transaction}
            cancel={() => setTransaction(null)}
            save={save}
            remove={remove}
          />
        ) : (
          <div>
            {renderControls()}
            {transactions.length ? (
              renderTransactions()
            ) : (
              <NotFoundSearchComponent>
                Nenhuma transação encontrada
              </NotFoundSearchComponent>
            )}
          </div>
        )}
      </ContentComponent>
    </PageComponent>
  );
};
