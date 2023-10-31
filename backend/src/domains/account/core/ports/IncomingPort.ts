import { Account } from '../models/Account';

export enum IncomingPortEnum {
  CreateAccountUseCase = 'CreateAccountUseCase',
  FetchAccountUseCase = 'FetchAccountUseCase',
  DeleteAccountUseCase = 'DeleteAccountUseCase',
}

export interface CreateAccountUseCase {
  createAccount(account: Account): Promise<Account>;
}

export interface FetchAccountUseCase {
  fetchAccount(accountId: string): Promise<Account>;
  fetchAllAccounts(): Promise<Account[]>;
}

export interface DeleteAccountUseCase {
  deleteAccount(accountId: string): Promise<void>;
}
