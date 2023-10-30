# Hello Domain

- This is responsible for sending hello world by fetching data from the mock db

## Descriptions:

**Application:**
- contains service and rest controller
- rest controller uses service as dependency for sending string [Hello World]
- service uses use case as dependency
- Service:
  - Uses `usecase` as dependency in order to send data to the controller
  - If required map the data to necessary DTO
- Controller:
  - Currently there is only rest controller
  - Controller uses `Service` as dependency and invoke the method

**Core:**
- contains ports and models(domain)
- ports are basically interface or contracts
- since in ts interfaces are lost during runtime so we are using enum and value same name as interface's name for DI
- Domain contains:
  - Hello class: have only one property `message`
- Ports contains:
  - Incoming Port:
    - `interface DisplayHelloUseCase` which has `fetchHello(): string` [This is contract to fetchHello message]
    - `enum IncomingPortEnum` with value `DisplayHelloUseCase = 'DisplayHelloUseCase'` [This will be used for DI later]
  - Outgoing Port:
    - `interface HelloRepository` which has `fetchHello(): string`[This is contract to fetchHello message from persistent layer]
    - `enum OutgoingPortEnum` with value `HelloRepository = 'HelloRepository'` [This will be used for DI later]
- **Note:** in above there is `fetchHello(): string` in both outgoing and incoming port both have different use case
  - method in incoming port is responsible to send the message `hello world` to the client(or to the controller)
  - method is outgoing port is responsible to fetch the data from the persistent layer `[Request initiated from our service to outside]`

- UseCase:
  - This is the implementation of the `incoming port`
  - Uses `Outgoing port` as `dependency` to get the required data ie message in this case

**Infrastructure:**
- Adapter:
  - Implementation of `outgoing port` in our case fetch data from the mock database

**Module:**
- Entry point of this hello domain
- Using this we can inject dependency. In our case, We:
  - inject the `service` to `controller`
  - inject the `usecase` to `service`
  - inject the `repository` to `usecase`


**Note:** since this is simple domain so we are using core model directly in infrastructure this shouldn't be done there should be model inside the infrastructure

---

## Basic Flow
```markdown
Module (inject service, usecase, repository)

                Controller -> Service -----> UseCase
                    |             |             |
As Dependency:   Service       UseCase       Repository
                                           /      \     \
                                          /        \     \
                                         /          \     XYZRepository
                                MockRepository   PostgresRepository
```

### Explore the Code you will get it

---
**Thank you 🙏**