const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const routesPath = path.join(__dirname, 'routes');

// 폴더트리 라우팅 설정
fs.readdirSync(routesPath).forEach(file => {
  const route = path.join(routesPath, file);
  const routeName = file === 'index.js' ? '/' : `/${file.split('.')[0]}`;
  app.use(routeName, require(route));
});

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error occurred while starting the server: ${err.message}`)
    process.exit(1);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});