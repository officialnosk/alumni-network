import { Account } from '../models/Account';

export enum IncomingPortEnum {
  CreateAccountPort = 'CreateAccountPort',
  FetchAccountPort = 'FetchAccountPort',
}

export interface CreateAccountPort {
  createAccount(account: Account): Promise<Account>;
}

export interface FetchAccountPort {
  fetchAccount(accountId: string): Promise<Account>;
  fetchAllAccounts(): Promise<Account[]>;
}
