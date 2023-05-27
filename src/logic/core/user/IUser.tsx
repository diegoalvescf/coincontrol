export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf?: string;
  phone?: string;
  imageUrl?: string | null;
}
