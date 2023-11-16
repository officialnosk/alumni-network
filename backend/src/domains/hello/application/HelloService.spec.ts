import { Test, TestingModule } from '@nestjs/testing';
import {
  DisplayHelloUseCase,
  IncomingPortEnum,
} from '../core/ports/IncomingPort';
import { HelloService } from './HelloService';

describe('HelloService', () => {
  let helloAdapter: DisplayHelloUseCase;
  let mockRepository;
  let spy: jest.SpyInstance;

  beforeEach(async () => {
    mockRepository = {
      fetchHello: jest.fn().mockReturnValue('hello'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HelloService,
        {
          provide: IncomingPortEnum.DisplayHelloUseCase,
          useValue: mockRepository,
        },
      ],
    }).compile();
    spy = jest.spyOn(mockRepository, 'fetchHello');
    helloAdapter = module.get<DisplayHelloUseCase>(HelloService);
  });

  afterEach(() => {
    spy.mockClear();
  });

  it('should get hello', () => {
    const result = helloAdapter.fetchHello();
    expect(result).toEqual('hello');
  });

  it('should have called getHello once', () => {
    helloAdapter.fetchHello();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
