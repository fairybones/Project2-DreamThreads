const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const userRoutes = require('./controllers/api/user-routes'); // Path to user-routes.js

const routes = require('./controllers');
const sequelize = require('./backend/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};

app.use(session(sess));

// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Add route handlers for GET and POST requests to /api/create-account
app.get('/api/create-account', (req, res) => {
    res.status(200).json({ message: 'GET request to /api/create-account' });
});

app.post('/api/create-account', (req, res) => {
    // Handle account creation logic here
    res.status(200).json({ message: 'POST request to /api/create-account' });
});

// Route for user login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Authentication logic
  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Verify user's credentials
  if (email === 'user@example.com' && password === 'password') {
    res.status(200).json({ message: 'User logged in successfully' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.use(routes);
app.use('/api/users', userRoutes); // Mount user routes at /api/users endpoint

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});