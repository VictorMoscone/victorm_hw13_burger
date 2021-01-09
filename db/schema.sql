DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);