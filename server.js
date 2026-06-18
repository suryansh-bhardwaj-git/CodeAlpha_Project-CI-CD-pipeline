const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>CI/CD Project</title></head>
      <body>
        <h1>Azure CI/CD Internship Project Successfully Deployed</h1>
        <p>Build ID: ${process.env.BUILD_ID || 'local'}</p>
        <p>Deployed via Azure DevOps Pipeline</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
