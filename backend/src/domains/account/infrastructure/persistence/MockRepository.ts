import { Account, Role } from '../../core/models/Account';
import { Account as AccountEntity } from '../entities/Account';
import { AccountRepository } from '../../core/ports/OutgoingPort';

export class AccountMockRepository implements AccountRepository {
  private accounts: AccountEntity[] = [];

  async createAccount(account: Account): Promise<Account> {
    this.accounts.push(this._toEntity(account));
    return account;
  }

  async fetchAccount(accountId: string): Promise<Account> {
    return this._findAccount(accountId);
  }

  async fetchAllAccounts(): Promise<Account[]> {
    return this._findAllAccounts();
  }

  private _findAccount(accountId: string): Promise<Account> {
    return new Promise((resolve, reject) => {
      const result = this.accounts.find((account) => account.id === accountId);
      if (!result) {
        reject(new Error('Account not found'));
      }
      resolve(this._toModel(result));
    });
  }

  private _findAllAccounts(): Promise<Account[]> {
    return new Promise((resolve) => {
      resolve(this.accounts.map((entity) => this._toModel(entity)));
    });
  }

  private _toEntity(account: Account): AccountEntity {
    const entity = new AccountEntity();
    entity.id = account.id;
    entity.userName = account.userName;
    entity.role = account.role;
    entity.password = account.password;
    entity.email = account.email;
    entity.institutionCode = account.institutionCode;
    entity.createdAt = account.createdAt;
    entity.updatedAt = account.updatedAt;
    return entity;
  }

  private _toModel(entity: AccountEntity): Account {
    const model = new Account();
    model.id = entity.id;
    model.userName = entity.userName;
    model.role = this._toRole(entity.role);
    model.password = entity.password;
    model.email = entity.email;
    model.institutionCode = entity.institutionCode;
    model.createdAt = entity.createdAt;
    model.updatedAt = entity.updatedAt;
    return model;
  }

  private _toRole(role: string): Role {
    if (role in Role) {
      return Role[role as keyof typeof Role];
    }
  }
}
