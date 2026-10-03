CREATE TABLE "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" varchar(256) NOT NULL,
	"status" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now()
);
