CREATE TABLE student (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    gpa FLOAT NOT NULL
);

INSERT INTO student(name, surname, gpa) VALUES('student1', 'qwer', '4.0');
INSERT INTO student(name, surname, gpa) VALUES('student2', 'asdf', '3.4');
INSERT INTO student(name, surname, gpa) VALUES('student3', 'zxcv', '2.7');
INSERT INTO student(name, surname, gpa) VALUES('student4', 'asdf', '1.6');
INSERT INTO student(name, surname, gpa) VALUES('student5', 'asdf', '0.5');
INSERT INTO student(name, surname, gpa) VALUES('student6', 'qwer', '3.3');
INSERT INTO student(name, surname, gpa) VALUES('student7', 'asdf', '3.4');
INSERT INTO student(name, surname, gpa) VALUES('student8', 'qewr', '2.0');
INSERT INTO student(name, surname, gpa) VALUES('student9', 'zxcv', '3.0');

CREATE TABLE users (
    username VARCHAR(100) UNIQUE NOT NULL PRIMARY KEY,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users(username, password) values('admin', 'admin');



