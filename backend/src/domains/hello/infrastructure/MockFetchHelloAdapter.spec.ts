import { Test, TestingModule } from '@nestjs/testing';
import { MockFetchHelloAdapter } from './MockFetchHelloAdapter';
import { FetchHelloRepositoryPort } from '../core/ports/OutgoingPort';

describe('MockFetchHelloAdapter', () => {
  let helloAdapter: FetchHelloRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockFetchHelloAdapter],
    }).compile();

    helloAdapter = module.get<FetchHelloRepositoryPort>(MockFetchHelloAdapter);
  });

  it('should get hello', () => {
    const result = helloAdapter.fetchHello();
    expect(result).toEqual('Hello World!!!');
  });
});
