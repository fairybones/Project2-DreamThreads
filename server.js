const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const userRoutes = require("./controllers/api/user-routes"); // Path to user-routes.js

const app = express();
const PORT = process.env.PORT || 3001;

// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as the template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "controllers")));
app.use(routes);
app.use(express.static("public"));

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    //sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const apparelRoutes = require("./controllers/api/apparel-M");
app.use("/apparel-M", apparelRoutes);

const accessoriesRoutes = require("./controllers/api/accessories");
app.use("/accessories", accessoriesRoutes);

const glassesRoutes = require("./controllers/api/glasses");
app.use("/glasses", glassesRoutes);

const watchesRoutes = require("./controllers/api/watches");
app.use("/watches", watchesRoutes);

const cologneRoutes = require("./controllers/api/cologne");
app.use("/cologne", cologneRoutes);

const apparel2Routes = require("./controllers/api/apparel-W");
app.use("/apparel-W", apparel2Routes);

const accessories2Routes = require("./controllers/api/accessories");
app.use("/accessories", accessories2Routes);

const jewelryRoutes = require("./controllers/api/jewelry");
app.use("/jewelry", jewelryRoutes);

const perfumeRoutes = require("./controllers/api/perfume");
app.use("/perfume", perfumeRoutes);

const loginRoutes = require("./controllers/api/user-routes");
app.use("/login", loginRoutes);

app.use(session(sess));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port " + PORT));
});
