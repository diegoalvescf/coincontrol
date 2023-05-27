import { ETransactionType } from './ETransactionType';

export default interface ITransaction {
  id?: string;
  description: string;
  value: number;
  transactionDate: Date;
  type: ETransactionType;
}

export const transactionEmpty: ITransaction = {
  description: '',
  value: 0,
  transactionDate: new Date(),
  type: ETransactionType.EXPENSE,
};
