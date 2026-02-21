const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Salom! CI/CD ishlayapti!', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Test uchun export
module.exports = app;

// Faqat to'g'ridan ishlatilganda listen qiladi
if (require.main === module) {
  app.listen(3000, () => console.log('App 3000-portda ishlamoqda'));
}
