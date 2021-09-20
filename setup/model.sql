CREATE DATABASE testreact;

CREATE TABLE  boards (
   board_id serial not null primary key,
   board_name varchar(128)
);

CREATE TABLE items (
   item_id bigserial not null primary key,
   item_title varchar(128),
   board_id smallint not null references boards(board_id)
);

CREATE TABLE lists (
   list_id bigserial  not null primary key,
   list_name varchar(64) not null,
   list_number varchar(12) not null,
   list_comment text,
   item_id smallint not null references items(item_id)
);