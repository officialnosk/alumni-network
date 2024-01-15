import { Test, TestingModule } from '@nestjs/testing';
import { CreateAccountAdapter } from './CreateAccountUseCase';
import {
  CreateAccountUseCase,
  DeleteAccountUseCase,
  FetchAccountUseCase,
} from '../ports/IncomingPort';
import { Account } from '../models/Account';
import { OutgoingPortEnum } from '../ports/OutgoingPort';
import { FetchAccountAdapter } from './FetchAccountUseCase';
import { AccountNotFound } from '../exceptions/AccountNotFound';
import { AccountMockRepository } from '../../infrastructure/database/MockRepository';
import { DeleteAccountAdapter } from './DeleteAccountUseCase';

describe('Account UseCase Test', () => {
  let createAccountAdapter: CreateAccountUseCase;
  let fetchAccountAdapter: FetchAccountUseCase;
  let deleteAccountAdapter: DeleteAccountUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAccountAdapter,
        FetchAccountAdapter,
        DeleteAccountAdapter,
        {
          provide: OutgoingPortEnum.AccountRepository,
          useClass: AccountMockRepository,
        },
      ],
    }).compile();
    jest.spyOn(AccountMockRepository.prototype, 'createAccount');
    createAccountAdapter =
      module.get<CreateAccountUseCase>(CreateAccountAdapter);
    fetchAccountAdapter = module.get<FetchAccountUseCase>(FetchAccountAdapter);
    deleteAccountAdapter =
      module.get<DeleteAccountUseCase>(DeleteAccountAdapter);
  });

  it('should return account on create account', async () => {
    const account = new Account();
    account.id = '1';
    account.email = 'test@test.com';
    const result = await createAccountAdapter.createAccount(account);
    expect(result.id).toEqual('1');
  });

  it('should return empty array on fetch all accounts', async () => {
    const result = await fetchAccountAdapter.fetchAllAccounts();
    expect(result).toHaveLength(0);
  });

  it('should return account on fetch account', async () => {
    const account = new Account();
    account.id = '1';
    account.email = 'test@test.com';
    await createAccountAdapter.createAccount(account);
    const result = await fetchAccountAdapter.fetchAccount('1');
    expect(result.id).toEqual('1');
  });

  it('should not return empty account after account creation in fetch all accounts', async () => {
    const account = new Account();
    account.id = '1';
    account.email = 'test@test.com';
    await createAccountAdapter.createAccount(account);

    const account2 = new Account();
    account2.id = '2';
    account2.email = 'test2@test.com';

    await createAccountAdapter.createAccount(account2);
    const result = await fetchAccountAdapter.fetchAllAccounts();

    expect(result).toEqual([account, account2]);
    // expect(spy).toBeCalledTimes(2);
    expect(result).not.toHaveLength(0);
  });

  it('should throw AccountNotFound exception on delete', () => {
    expect(async () => {
      await deleteAccountAdapter.deleteAccount('1');
    }).rejects.toThrowError(AccountNotFound);
  });

  it('should delete account if already exists', async () => {
    const account = new Account();
    account.id = '1';
    account.email = 'test@test.com';
    await createAccountAdapter.createAccount(account);
    await deleteAccountAdapter.deleteAccount('1');
    const result = await fetchAccountAdapter.fetchAllAccounts();
    expect(result).toHaveLength(0);
  });
});
