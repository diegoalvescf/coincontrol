import services from '@/logic/core';
import ITransaction from '@/logic/core/finances/Transaction';
import { useCallback, useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export enum EDisplayType {
  List = 'list',
  Grid = 'grid',
}

export type TDisplayType = EDisplayType;

export default function useTransaction() {
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState<Date>(new Date());
  const [displayType, setDisplayType] = useState<TDisplayType>(
    EDisplayType.List
  );
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [transaction, setTransaction] = useState<ITransaction | null>(null);

  const fetchTransactions = useCallback(
    async function () {
      if (!user) return;
      const transactions = await services.transaction.queryByMonth(user, date);
      setTransactions(transactions);
    },
    [user, date]
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions, date]);

  async function save(transaction: ITransaction) {
    if (!user) return;
    services.transaction.save(transaction, user);
    setTransaction(null);
    await fetchTransactions();
  }

  async function remove(transaction: ITransaction) {
    if (!user) return;
    await services.transaction.remove(transaction, user);
    setTransaction(null);
    await fetchTransactions();
  }

  return {
    date,
    transactions,
    transaction,
    displayType,
    save,
    remove,
    setTransaction,
    changeDate: setDate,
    setDisplayType,
  };
}
