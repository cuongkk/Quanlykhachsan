CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title  TEXT NOT NULL,
  author TEXT NOT NULL,
  year   INT
);
INSERT INTO books (title, author, year) VALUES
('Clean Code','Robert C. Martin',2008),
('You Don''t Know JS','Kyle Simpson',2015),
('DDIA','Martin Kleppmann',2017)
ON CONFLICT DO NOTHING;
