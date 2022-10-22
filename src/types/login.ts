export interface LoginUser {
  userCode: string;
  password: string;
}

export interface AccountToken {
  id: number;
  userName: string;
  password: string;
  sex: number;
  age: number;
  avatar: string;
  userCode: string;
  token: string;
}
