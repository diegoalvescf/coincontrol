import { ETransactionType } from '@/logic/core/finances/ETransactionType';
import ITransaction from '@/logic/core/finances/Transaction';
import Id from '@/logic/core/shared/id';

export const TRANSACTIONS_DATA: ITransaction[] = [
  {
    id: Id.newId(),
    description: 'Salário',
    value: 7123.34,
    transactionDate: new Date(2023, 4, 1),
    type: ETransactionType.INCOME,
  },
  {
    id: Id.newId(),
    description: 'Conta de Luz',
    value: 320.0,
    transactionDate: new Date(2023, 4, 3),
    type: ETransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Aluguel + Cond.',
    value: 1817.59,
    transactionDate: new Date(2023, 4, 3),
    type: ETransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Cartão de Crédito',
    value: 2200.0,
    transactionDate: new Date(2023, 4, 10),
    type: ETransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Conta de Água',
    value: 174.35,
    transactionDate: new Date(2023, 4, 8),
    type: ETransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Mensalidade MBA',
    value: 750.0,
    transactionDate: new Date(2023, 4, 2),
    type: ETransactionType.EXPENSE,
  },
  {
    id: Id.newId(),
    description: 'Investimentos',
    value: 2123.34,
    transactionDate: new Date(2023, 4, 1),
    type: ETransactionType.INCOME,
  },
];
