import Collection from '@/logic/firebase/db/Collection';

import { IUser } from '../user/IUser';

import ITransaction from './Transaction';
import DateFormatting from '@/logic/utils/DateFormatting';

export default class TransactionServices {
  private _collection = new Collection();

  async save(transaction: ITransaction, user: IUser) {
    return this._collection.save(
      `finances/${user.email}/transactions`,
      transaction
    );
  }

  async remove(transaction: ITransaction, user: IUser) {
    return this._collection.remove(
      `finances/${user.email}/transactions`,
      transaction.id
    );
  }

  async query(user: IUser) {
    const path = `finances/${user.email}/transactions`;
    return await this._collection.query(path, 'transactionDate', 'asc');
  }

  async queryByMonth(user: IUser, date: Date) {
    const path = `finances/${user.email}/transactions`;
    return await this._collection.queryWithFilters(path, [
      {
        attribute: 'transactionDate',
        op: '>=',
        value: DateFormatting.firstDay(date),
      },
      {
        attribute: 'transactionDate',
        op: '<=',
        value: DateFormatting.lastDay(date),
      },
    ]);
  }
}
