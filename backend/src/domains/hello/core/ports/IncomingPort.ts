export enum IncomingPortEnum {
  DisplayHelloUseCase = 'DisplayHelloUseCase',
}

export interface DisplayHelloUseCase {
  fetchHello(): string;
}
