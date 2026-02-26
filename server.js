const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();

// open (or create) a SQLite database file
const db = new sqlite3.Database(path.join(__dirname, 'mcshs.db'));

// create tables if they don't already exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS results (
      roll TEXT PRIMARY KEY,
      math INTEGER,
      english INTEGER
    )
  `);

  // insert sample result rows if table is empty
  db.get('SELECT COUNT(*) AS cnt FROM results', (err, row) => {
    if (!err && row.cnt === 0) {
      const stmt = db.prepare('INSERT INTO results(roll,math,english) VALUES (?,?,?)');
      stmt.run('0000000001', 90, 85);
      stmt.run('0000000002', 75, 92);
      stmt.finalize();
      console.log('Inserted sample result data');
    }
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'replace_with_env_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set true when using HTTPS
}));
app.use(express.static(path.join(__dirname)));

function isValidRoll(roll) {
  return /^[0-9]{10}$/.test(roll);
}

app.post('/contact', (req, res) => {
  console.log('Contact submission:', req.body);
  res.send('Thank you for contacting us!');
});

app.post('/login', async (req, res) => {
  const { logemail, logpass } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [logemail], async (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (!row) {
      return res.status(401).send('Invalid credentials');
    }
    const match = await bcrypt.compare(logpass, row.password);
    if (match) {
      req.session.userId = row.id;
      req.session.userEmail = row.email;
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.post('/signup', async (req, res) => {
  const { logname, logemail, logpass } = req.body;
  try {
    const hash = await bcrypt.hash(logpass, 10);
    const stmt = db.prepare('INSERT INTO users(name,email,password) VALUES (?,?,?)');
    stmt.run(logname, logemail, hash, function(err) {
      if (err) {
        console.error(err);
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(400).send('Email already registered');
        }
        return res.status(500).send('Server error');
      }
      console.log('New user registered', logname, logemail);
      req.session.userId = this.lastID;
      req.session.userEmail = logemail;
      res.send('Signup successful');
    });
  } catch (e) {
    console.error(e);
    res.status(500).send('Server error');
  }
});

// simple middleware to guard routes
function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  res.status(401).send('Authentication required');
}

app.get('/results', ensureAuthenticated, (req, res) => {
  const roll = req.query.roll;
  if (!roll || !isValidRoll(roll)) {
    return res.status(400).send('Roll number must be exactly 10 digits');
  }
  db.get('SELECT math, english FROM results WHERE roll = ?', [roll], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (row) {
      res.json(row);
    } else {
      res.status(404).send('No results found');
    }
  });
});

// admin listing route
app.get('/admin', ensureAuthenticated, (req, res) => {
  db.all('SELECT roll, math, english FROM results', (err, rows) => {
    if (err) return res.status(500).send('Server error');
    res.json(rows);
  });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});