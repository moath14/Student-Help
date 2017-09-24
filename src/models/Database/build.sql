BEGIN;

DROP TABLE IF EXISTS students  CASCADE;
DROP TABLE IF EXISTS books  CASCADE;
CREATE TABLE "students" (
	"name" varchar NOT NULL,
	"email" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"img" varchar NOT NULL DEFAULT 'user_avatar.png',
	CONSTRAINT students_pk PRIMARY KEY ("email")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "books" (
	"id" serial NOT NULL,
	"title" varchar NOT NULL,
	"isbn" varchar NOT NULL,
	"version" varchar NOT NULL,
	"auther" varchar NOT NULL,
	"img_url" varchar NOT NULL,
	"creator_email" varchar NOT NULL,
	"status" varchar NOT NULL DEFAULT 'available',
	"borrower_email" varchar NOT NULL,
	"booking_date" TIMESTAMP NOT NULL,
	CONSTRAINT books_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "books" ADD CONSTRAINT "books_fk0" FOREIGN KEY ("creator_email") REFERENCES "students"("email");
ALTER TABLE "books" ADD CONSTRAINT "books_fk1" FOREIGN KEY ("borrower_email") REFERENCES "students"("email");

INSERT INTO students (name, email, password, img) VALUES

  ('mahmoud', 'mahmoud.box@gmail.com', '123456', 'mahmoud.png'),
  ('ghadeer', 'ghadeer.box@gmail.com', '123456', 'ghadeer.png'),
  ('moath', 'moath.box@gmail.com', '12356', 'moath.png');

INSERT INTO books (title, isbn, version, auther, img_url,creator_email,status,borrower_email,booking_date) VALUES
('Computer Science', '5666845222', '10', 'Matt', 'computer.png','mahmoud.box@gmail.com','available','moath.box@gmail.com','2017-07-25T16:58:35.296Z'),
('UX/UI', '5666845222', '3', 'David', 'ux.png','ghadeer.box@gmail.com','available','mahmoud.box@gmail.com','2017-07-25T16:58:35.296Z'),
('Data Mining', '6322845222', '5', 'Alex', 'DMining.png','moath.box@gmail.com','available','mahmoud.box@gmail.com','2017-07-25T16:58:35.296Z');


COMMIT;
