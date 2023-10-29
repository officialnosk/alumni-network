import { Account } from '../models/Account';

export enum OutgoingPortEnum {
  AccountRepository = 'AccountRepository',
}

export interface AccountRepository {
  createAccount(account: Account): Promise<Account>;
  fetchAccount(accountId: string): Promise<Account>;
  fetchAllAccounts(): Promise<Account[]>;
}
