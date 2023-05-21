-- if our db already exists, drop it
DROP DATABASE IF EXISTS products;

-- Create our Database
CREATE DATABASE products;

-- Connect to the db
\c products;

-- Create a table for our products
DROP TABLE IF EXISTS product;

CREATE TABLE product (   
    id SERIAL PRIMARY KEY,   
    name TEXT NOT NULL,
    description TEXT NOT NULL, 
    price INTEGER NOT NULL, 
    rating NUMERIC CHECK (rating >= 0 AND rating <= 5) NOT NULL,
    is_favorite BOOLEAN,
    image_url TEXT CHECK (image_url ~* '^https?://.+') NOT NULL,
    year INTEGER NOT NULL CHECK (year >= 0),
    mileage INTEGER NOT NULL CHECK (mileage >= 0)
);
