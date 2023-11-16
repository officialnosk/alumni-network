export enum OutgoingPortEnum {
  FetchHelloRepositoryPort = 'FetchHelloRepositoryPort',
}

export interface HelloRepositoryPort {
  fetchHello(): string;
}
