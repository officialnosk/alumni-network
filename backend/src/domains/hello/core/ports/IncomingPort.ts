export enum IncomingPortEnum {
  DisplayHelloPort = 'DisplayHelloPort',
}

export interface DisplayHelloPort {
  fetchHello(): string;
}
