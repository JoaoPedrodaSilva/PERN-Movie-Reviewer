-- create database
CREATE DATABASE movie_reviwer;

-- create todo table
CREATE TABLE movie(
    movie_id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL
);

-- -- create individual todo
-- INSERT INTO todo(description) VALUES($1) RETURNING *;

-- -- get all todos
-- SELECT * FROM todo;

-- -- get individual todo
-- SELECT * FROM todo WHERE id = $1;

-- -- update individual todo
-- UPDATE todo SET description = $1 WHERE id = $2 RETURNING *;

-- -- delete individual todo
-- DELETE FROM todo WHERE id = $1