CREATE TABLE BotSuggestions(
    id SERIAL PRIMARY KEY,
    body VARCHAR NOT NULL,
    status boolean NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

