import { Test, TestingModule } from '@nestjs/testing';
import { FetchHelloPort, FetchHelloPortEnum } from '../core/ports/IncomingPort';
import { HelloService } from './HelloService';

describe('HelloService', () => {
  let helloAdapter: FetchHelloPort;
  let mockRepository;

  beforeEach(async () => {
    mockRepository = {
      fetchHello: jest.fn().mockReturnValue('hello'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HelloService,
        {
          provide: FetchHelloPortEnum.FetchHelloPort,
          useClass: mockRepository,
        },
      ],
    }).compile();

    helloAdapter = module.get<FetchHelloPort>(HelloService);
  });

  it('should get hello', () => {
    const result = helloAdapter.fetchHello();
    console.log('result: ', result);
    expect(result).toEqual('hello');
  });
});
