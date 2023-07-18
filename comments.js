// Create web server
// Create database connection
// Create database schema
// Create database model
// Create database instance
// Create server instance
// Create server routes
// Create server error handlers
// Start server
// Stop server
// Close database connection
// Close database model
// Close database instance
// Close server instance
// Remove database schema
// Remove web server

// Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Variables
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connection successful!'));

// Schema
const commentSchema = new mongoose.Schema({
    comment: String,
    date: Date
});