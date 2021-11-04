const express = require('express');
const router = express.Router();

/* router.get('/', (req, res) => {
  res.send();
}); */

router.post('/', (req, res) => {
  res.send('Hello World!');
});

router.put('/', (req, res) => {
  res.send('Hello World!');
});

router.delete('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;