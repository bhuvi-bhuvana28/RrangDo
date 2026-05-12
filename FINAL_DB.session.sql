
DROP TABLE IF EXISTS rrangdo.orders;
DROP TABLE IF EXISTS rrangdo.addresses;
DROP TABLE IF EXISTS rrangdo.users;

CREATE TABLE rrangdo.users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);


CREATE TABLE rrangdo.addresses (

  id INT AUTO_INCREMENT PRIMARY KEY,

  name VARCHAR(100),

  phone VARCHAR(20),

  pincode VARCHAR(20),

  house VARCHAR(200),

  area VARCHAR(200),

  city VARCHAR(100),

  state VARCHAR(100)

);

CREATE TABLE rrangdo.orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  total FLOAT,
  status VARCHAR(50),
  address TEXT,
  items TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO rrangdo.orders (total, status, address, items)
VALUES (500, 'Pending', '{}', '[]');

SELECT * FROM rrangdo.orders;

