import Authentication, {
  CancelMonitoring,
  MonitorUser,
} from '@/logic/firebase/auth/Authentication';
import Collection from '@/logic/firebase/db/Collection';
import { IUser } from './IUser';

export default class UserServices {
  private _authentication = new Authentication();
  private _collection = new Collection();

  monitorAuthentication(observer: MonitorUser): CancelMonitoring {
    return this._authentication.toMonitor(async (user) => {
      observer(
        user
          ? {
              ...user,
              ...(await this.query(user.email)),
            }
          : null
      );
    });
  }

  async loginGoogle(): Promise<IUser | null> {
    const user = await this._authentication.loginGoogle();
    if (!user) return null;

    let databaseUser = await this.query(user.email);
    if (!databaseUser) databaseUser = await this.save(user);

    return { ...user, ...databaseUser };
  }

  logout(): Promise<void> {
    return this._authentication.logout();
  }

  async save(user: IUser) {
    return await this._collection.save('users', user, user.email);
  }

  async query(email: string) {
    return await this._collection.queryById('users', email);
  }
}
