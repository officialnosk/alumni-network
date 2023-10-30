import { Test, TestingModule } from '@nestjs/testing';
import { MockHelloRepository } from './MockHelloRepository';
import { HelloRepository } from '../core/ports/OutgoingPort';

describe('MockFetchHelloAdapter', () => {
  let helloAdapter: HelloRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockHelloRepository],
    }).compile();

    helloAdapter = module.get<HelloRepository>(MockHelloRepository);
  });

  it('should get hello', () => {
    const result = helloAdapter.fetchHello();
    expect(result).toEqual('Hello World!!!');
  });
});
