CREATE DATABASE esp_data;
USE esp_data;
CREATE TABLE sensor_data(
    id INT AUTO_INCREMENT PRIMARY KEY,
    temperature FLOAT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);