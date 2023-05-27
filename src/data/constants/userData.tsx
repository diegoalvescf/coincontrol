import Id from '@/logic/core/shared/id';
import { IUser } from '@/logic/core/user/IUser';

export const USER_DATA = {
  id: Id.newId(),
  name: 'Diego Alves',
  cpf: '09162737929',
  phone: '48996748076',
  email: 'diego@alves.com',
  imageUrl:
    'https://media.licdn.com/dms/image/C4D03AQEV7W04KtdXPw/profile-displayphoto-shrink_400_400/0/1623969370438?e=1689811200&v=beta&t=k6E3L0y-E_WzzARsR8RA-NVCt38Lc1Zlc1WHtSaw4S4',
} as IUser;
