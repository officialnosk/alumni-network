create table if not exists accounts
(
    id         varchar(100) primary key,
    user_name  varchar(50)  not null,
    role       varchar(20)  not null,
    password   varchar      not null,
    app_id     varchar(100) not null,
    created_at bigint,
    updated_at bigint
);

create table if not exists users
(
    id                 varchar(100) PRIMARY KEY,
    institution_id     varchar(100),
    account_id         varchar(100) unique,
    full_name          varchar,
    educational_detail json default '{}',
    contact_detail     json default '{}',
    career_detail      json default '{}',
    personal_detail    json default '{}',
    created_at         bigint,
    updated_at         bigint,
    foreign key (account_id) references accounts (id)
);

create table if not exists institutions
(
    id                 varchar(100) PRIMARY KEY,
    name               varchar,
    address_detail     json default '{}',
    contact_info       json default '{}',
    institution_detail json default '{}',
    created_at         bigint,
    updated_at         bigint,
    app_id             varchar(100)
);

create table if not exists threads
(
    id         varchar(100) PRIMARY KEY,
    title      varchar,
    body       json default '{}',
    user_id    varchar(100),
    status     varchar(50),
    created_at bigint,
    updated_at bigint,
    app_id     varchar(100),
    foreign key (user_id) references users (id)
);

create table if not exists thread_replies
(
    id         varchar(100) PRIMARY KEY,
    body       json default '{}',
    thread_id  varchar(100),
    user_id    varchar(100),
    created_at bigint,
    updated_at bigint,
    foreign key (thread_id) references threads (id),
    foreign key (user_id) references users (id)
);

create table if not exists reactions
(
    id         varchar(100) PRIMARY KEY,
    type       varchar(25),
    user_id    varchar(100),
    reply_id   varchar(100),
    created_at bigint,
    updated_at bigint,
    foreign key (user_id) references users (id)
);