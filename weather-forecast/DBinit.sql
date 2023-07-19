USE master
GO

DROP DATABASE IF EXISTS insight_2_weather;
GO

CREATE DATABASE insight_2_weather;
GO

USE insight_2_weather;
GO

BEGIN TRANSACTION

DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id int IDENTITY (1,1) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	salt varchar(200) NOT NULL,
	user_role varchar(50) NOT NULL
	CONSTRAINT PK_user PRIMARY KEY (user_id),
	CONSTRAINT UQ_username UNIQUE (username)
)

DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS user_locations;

CREATE TABLE locations(
	location_id int IDENTITY (1,1) NOT NULL,
	location_latitude int NOT NULL,
	location_longitude int NOT NULL,
	location_name varchar(50) NOT NULL,
	CONSTRAINT PK_location PRIMARY KEY (location_id)
)

CREATE TABLE user_locations(
	user_id int NOT NULL,
	location_id int NOT NULL,
	CONSTRAINT PK_user_location PRIMARY KEY (user_id, location_id),
	CONSTRAINT FK_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
	CONSTRAINT FK_location_id FOREIGN KEY (location_id) REFERENCES locations(location_id)
)

INSERT INTO users (username, password_hash, salt, user_role) VALUES ('admin','YhyGVQ+Ch69n4JMBncM4lNF/i9s=', 'Ar/aB2thQTI=','admin');
COMMIT;
GO