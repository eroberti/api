CREATE TABLE public.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    email varchar(100),
    CONSTRAINT users_pk PRIMARY KEY(id)
);
