import { Test, TestingModule } from '@nestjs/testing';
import { MockFetchHelloAdapter } from './MockFetchHelloAdapter';
import { HelloRepositoryPort } from '../core/ports/OutgoingPort';

describe('MockFetchHelloAdapter', () => {
  let helloAdapter: HelloRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockFetchHelloAdapter],
    }).compile();

    helloAdapter = module.get<HelloRepositoryPort>(MockFetchHelloAdapter);
  });

  it('should get hello', () => {
    const result = helloAdapter.fetchHello();
    expect(result).toEqual('Hello World!!!');
  });
});
