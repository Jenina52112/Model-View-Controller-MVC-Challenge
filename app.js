// Import the HTML router
const htmlRouter = require('./routes/html/index');
// Import required modules
const express = require('express');
const path = require('path');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Load environment variables from .env file
require('dotenv').config();
const exphbs = require('express-handlebars');

// Create an instance of Express application
const app = express();

// Middleware configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// Session middleware setup
const sequelize = require('./config/database');
const sessionStore = new SequelizeStore({ db: sequelize });
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));

// Use the HTML router for handling HTML routes
app.use('/', htmlRouter);

// Route handlers
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


