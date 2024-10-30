const express = require('express');
const app = require('juice-shop');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Juice Shop is running on http://localhost:${PORT}`);
});