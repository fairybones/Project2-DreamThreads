// import express to set up server
const express = require('express');

// handlebars to dynamically render pages in browser
const exphbs = require('express-handlebars');

// import setup for sequelize session
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const session = require('express-session');

// import RESTful API routes
const path = require('path');
const routes = require('./controllers');
const userRoutes = require('./controllers/api/user-routes');

// start express server
const app = express();
const PORT = process.env.PORT || 3001;

// cookie for login
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

// session middleware
app.use(session(sess));
// json parsing middleware
app.use(express.json());
// Parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// handlebars middleware
app.engine('handlebars', exphbs());
// Set Handlebars as the template engine
app.set('view engine', 'handlebars');

// initialize endpoints
const apparelRoutes = require('./controllers/api/apparel');
app.use('/apparel', apparelRoutes);

const accessoriesRoutes = require('./controllers/api/accessories');
app.use('/accessories', accessoriesRoutes);

const glassesRoutes = require('./controllers/api/glasses');
app.use('/glasses', glassesRoutes);

const watchesRoutes = require('./controllers/api/watches');
app.use('/watches', watchesRoutes);

const cologneRoutes = require('./controllers/api/cologne');
app.use('/cologne', cologneRoutes);

const apparel2Routes = require('./controllers/api/apparel2');
app.use('/apparel2', apparel2Routes);

const accessories2Routes = require('./controllers/api/accessories2');
app.use('/accessories2', accessories2Routes);

const jewelryRoutes = require('./controllers/api/jewelry');
app.use('/jewelry', jewelryRoutes);

const braceletsRoutes = require('./controllers/api/bracelets');
app.use('/bracelets', braceletsRoutes);

const perfumeRoutes = require('./controllers/api/perfume');
app.use('/perfume', perfumeRoutes);

const newRoutes = require('./controllers/api/new');
app.use('/new', newRoutes);

const teesRoutes = require('./controllers/api/tees');
app.use('/tees', teesRoutes);

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + PORT));
});


