export enum OutgoingPortEnum {
  HelloRepository = 'HelloRepository',
}

export interface HelloRepository {
  fetchHello(): string;
}
