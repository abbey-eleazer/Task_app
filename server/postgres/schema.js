import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  status: varchar("status", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
