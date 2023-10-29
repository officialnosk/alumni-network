import { Test, TestingModule } from '@nestjs/testing';
import { CreateAccountUseCase } from './CreateAccountUseCase';
import { CreateAccountPort, FetchAccountPort } from '../ports/IncomingPort';
import { Account } from '../models/Account';
import { OutgoingPortEnum } from '../ports/OutgoingPort';
import { FetchAccountUseCase } from './FetchAccountUseCase';

describe('Account', () => {
  let createAccountAdapter: CreateAccountPort;
  let fetchAccountAdapter: FetchAccountPort;
  let mockRepository;
  let spy: jest.SpyInstance;

  beforeEach(async () => {
    mockRepository = {
      accounts: [] as Account[],
      createAccount: jest.fn(function (account: Account) {
        this.accounts.push(account);
        return account;
      }),
      fetchAccount: jest.fn(function (accountId: string) {
        return this.accounts.find(
          (account: Account) => account.id === accountId,
        );
      }),
      fetchAllAccounts: jest.fn(function () {
        return this.accounts;
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateAccountUseCase,
        {
          provide: OutgoingPortEnum.AccountRepository,
          useValue: mockRepository,
        },
        FetchAccountUseCase,
        {
          provide: OutgoingPortEnum.AccountRepository,
          useValue: mockRepository,
        },
      ],
    }).compile();
    spy = jest.spyOn(mockRepository, 'createAccount');
    createAccountAdapter = module.get<CreateAccountPort>(CreateAccountUseCase);
    fetchAccountAdapter = module.get<FetchAccountPort>(FetchAccountUseCase);
  });

  afterEach(() => {
    spy.mockClear();
  });

  it('should return account on create account', async () => {
    const account = new Account();
    account.id = '1';
    account.email = 'test@test.com';
    const result = await createAccountAdapter.createAccount(account);
    expect(spy).toBeCalledTimes(1);
    expect(result.id).toEqual('1');
  });

  it('should return empty array on fetch all accounts', async () => {
    const result = await fetchAccountAdapter.fetchAllAccounts();
    expect(result).toEqual([]);
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

  it('shouldnot return empty account after account creation in fetch all accounts', async () => {
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
    expect(spy).toBeCalledTimes(2);
    expect(result).not.toHaveLength(0);
  });
});
