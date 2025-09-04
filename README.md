<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Studentarium Backend README</title>
</head>
<body>
  <h1>Studentarium Backend</h1>
  <p>This is the backend for the Studentarium application. It was created using <strong>Node.js</strong>, <strong>Express</strong>, <strong>TypeScript</strong> and <strong>PostgreSQL</strong>.</p>

  <h2>📦 Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>TypeScript</li>
    <li>PostgreSQL (pg & pgAdmin)</li>
    <li>Bcrypt</li>
    <li>JWT (authentication)</li>
  </ul>

  <h2>⚙️ Installation and launch</h2>
  <ol>
    <li>Clone repo:
      <pre>git clone &lt;backend_repo_url&gt;</pre>
    </li>
    <li>Install dependencies:
      <pre>npm install</pre>
    </li>
    <li>Create an .env file in the root directory with these variables:
      <pre>
PORT=5000
JWT_SECRET=your_secret_key
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=studentarium_db
      </pre>
    </li>
    <li>Run backend in dev mode:
      <pre>npm run dev</pre>
    </li>
  </ol>

  <h2>📌 Project structure</h2>
  <ul>
    <li><strong>src/index.ts</strong> - main file for running server</li>
    <li><strong>src/routes/auth.ts</strong> - routes for login/register</li>
    <li><strong>src/controllers/authController.ts</strong> - authentication logic</li>
    <li><strong>src/middleware/authMiddleware.ts</strong> - JWT middleware for protected routes</li>
    <li><strong>src/db/pool.ts</strong> - PostgreSQL database connection</li>
  </ul>

  <h2>🧪 Testing API</h2>
  <ul>
    <li>Register: <code>POST /api/auth/register</code></li>
    <li>Login: <code>POST /api/auth/login</code></li>
    <li>Protected test route: <code>GET /api/protected</code> (need JWT in header: <code>Authorization: Bearer &lt;token&gt;</code>)</li>
  </ul>

  <h2>💡 Notes</h2>
  <ul>
    <li>All sensitive data (.env) are <strong>excluded from GitHub</strong> with .gitignore</li>
    <li>It uses Postman to test the API while the frontend is not connected.</li>
  </ul>
</body>
</html>
