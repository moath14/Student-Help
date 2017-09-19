BEGIN;

DROP TABLE IF EXISTS student , book CASCADE;


CREATE TABLE "student" (
    "id" serial NOT NULL,
    "name" varchar NOT NULL,
    "email" varchar NOT NULL,
    "password" varchar NOT NULL,
    "imag" varchar NOT NULL,
    CONSTRAINT student_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "book" (
    "id" serial NOT NULL,
    "title" varchar NOT NULL,
    "isbn" varchar ,
    "version" varchar,
    "auther" varchar NOT NULL,
    "url" varchar NOT NULL,
    "student_id" serial NOT NULL,
    CONSTRAINT book_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "book" ADD CONSTRAINT "book_fk0" FOREIGN KEY ("student_id") REFERENCES "student"("id");

INSERT INTO student (name, email, password, imag) VALUES
('Mahmoud', 'mahmoud.box@gmail.com', '123456', 'mahmoud.png'),
('Ghadeer', 'Ghadeer.box@gmail.com', '123456', 'ghadeer.png'),
('Moath', 'moath.box@gmail.com', '12356', 'moath.png');

INSERT INTO book (title, isbn, version, auther, url, student_id) VALUES
('Computer Science', '5666845222', '10', 'Matt', 'computer.png',1),
('UX/UI', '5666845222', '3', 'David', 'ux.png',2),
('Data Mining', '6322845222', '5', 'Alex', 'DMining.png',3);

COMMIT;
