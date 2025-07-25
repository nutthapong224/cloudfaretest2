-- init.sql

-- สร้างฐานข้อมูล (ถ้ายังไม่มี)
CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

-- สร้างตาราง users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ตัวอย่างข้อมูลผู้ใช้ (username: admin, password: admin1234)
-- รหัสผ่านต้องเข้ารหัส bcrypt ก่อนใส่ใน DB จริง
-- นี่เป็นรหัสผ่านที่เข้ารหัสด้วย bcrypt (ตัวอย่าง)
INSERT INTO users (username, password) VALUES
('admin', '$2b$10$3f8K8ZxX9/p7HlH2rJSO2eCxI6Yl9EJPQjNSlsLuHkSvxGiwjfp1G'); -- password: admin1234
