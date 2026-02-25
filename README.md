# MCSHS School Website

This is a simple static school website with a Node.js/Express backend stub.
The frontend pages interact with the server for:

- Contact form (`POST /contact`)
- Login (`POST /login`)
- Signup (`POST /signup`)
- Result checker (`GET /results?roll=...`)

## Setup

1. Navigate to the `mcshs` folder in a terminal:
   ```sh
   cd c:\Users\sunda\.vscode\mcshs
   ```
2. Install dependencies (includes Express and SQLite3):
   ```sh
   npm install
   ```
   This will also create `mcshs.db` automatically when the server first runs.
3. Start the server:
   ```sh
   npm start
   ```
   The app will listen on port 5500 by default.
   The database file (`mcshs.db`) will have two tables (`users` and `results`) and the server bootstraps sample result rows if none exist.

## Notes

- Static files (HTML, CSS, JS) are served from the project root.
- The server keeps user and result data in memory (for demonstration only).
- Extend or replace with a database for production use.
- Update `server.js` to implement real authentication and form handling.

Enjoy building out the school portal!