import { Get, Controller } from '@nestjs/common';
import { HelloService } from '../HelloService';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.fetchHello();
  }
}
