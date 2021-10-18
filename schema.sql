CREATE DATABASE my_api_test;

CREATE TABLE IF NOT EXISTS users(
    id SERIAL NOT NULL PRIMARY KEY,
    name_user TEXT NOT NULL,
    email TEXT NOT NULL,
    password_user TEXT NOT NULL
);