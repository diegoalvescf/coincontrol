import { IUser } from '@/logic/core/user/IUser';

import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { app } from '../config/app';

export type MonitorUser = (user: IUser | null) => void;
export type CancelMonitoring = () => void;

export default class Authentication {
  private _auth: Auth;

  constructor() {
    this._auth = getAuth(app);
  }

  async loginGoogle(): Promise<IUser | null> {
    const resp = await signInWithPopup(this._auth, new GoogleAuthProvider());
    return this.convertToUser(resp.user);
  }

  logout(): Promise<void> {
    return signOut(this._auth);
  }

  toMonitor(notify: MonitorUser): CancelMonitoring {
    return onIdTokenChanged(this._auth, async (firebaseUser) => {
      const user = this.convertToUser(firebaseUser);
      notify(user);
    });
  }

  private convertToUser(firebaseUser: User | null): IUser | null {
    if (!firebaseUser?.email) return null;
    const alternativeName = firebaseUser.email!.split('@')[0];

    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName ?? alternativeName,
      email: firebaseUser.email,
      imageUrl: firebaseUser.photoURL,
    };
  }
}
