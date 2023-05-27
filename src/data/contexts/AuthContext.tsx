import { createContext, useEffect, useState } from 'react';
import { IUser } from '../../logic/core/user/IUser';
import services from '@/logic/core';

interface IAuth {
  loading: boolean;
  user: IUser | null;
  loginGoogle: () => Promise<IUser | null>;
  logout: () => Promise<void>;
  updateUser: (newUser: IUser) => Promise<void>;
}

const AuthContext = createContext<IAuth>({
  loading: true,
  user: null,
  loginGoogle: async () => null,
  logout: async () => {},
  updateUser: async () => {},
});

export const AuthenticationProvider = (props: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const cancel = services.user.monitorAuthentication((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => cancel();
  }, []);

  async function updateUser(newUser: IUser) {
    if (user && user.email !== newUser.email) return logout();
    if (user && newUser && user.email === newUser.email) {
      await services.user.save(newUser);
      setUser(newUser);
    }
  }

  async function loginGoogle() {
    const user = await services.user.loginGoogle();
    setUser(user);
    return user;
  }

  async function logout() {
    await services.user.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        loginGoogle,
        logout,
        updateUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
