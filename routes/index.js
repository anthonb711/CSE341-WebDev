const express = require('express');
const router = express.Router();

// home route
router.get('/', (req, res) => { 
res.send("Kaia Wren Brown");
});

router.post('/', (req, res) => { 
  res.send("Kaia Wren Brown");
  });

  // profile route
  router.get('/profile', (req, res) => { 
    res.send("Hello, World, from Profile Route GET");
    });
    
    router.post('/profile', (req, res) => { 
      res.send("Hello, World, from Profile Route POST");
      });

  module.exports = router;