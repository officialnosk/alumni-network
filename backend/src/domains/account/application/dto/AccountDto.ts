export type CreateAccountResponse = {
  id: string;
  userName: string;
  role: string;
  email: string;
  institutionCode: string;
  createdAt: Date;
};

export type FetchAccountResponse = {
  id: string;
  userName: string;
  role: string;
  email: string;
  institutionCode: string;
  createdAt: Date;
};
