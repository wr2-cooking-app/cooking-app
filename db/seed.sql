CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(250),
    email VARCHAR(100),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    profile_picture VARCHAR(150)
);

CREATE TABLE meal_plan (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id)
);

CREATE TABLE recipe (
    id SERIAL PRIMARY KEY,
    recipe_id INT,
    meal_plan_id INT REFERENCES meal_plan(id)
); 