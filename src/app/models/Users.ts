export interface User {
  id?: number;
  username: string;
  password?: string;
  email?: string;
  token?: string;
  role?: Role;
}

export interface Role {
  id: number;
  name: string;
}
