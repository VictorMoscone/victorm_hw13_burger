const express = require('express');
const burger = require ('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
    // This will run the selectAll query for the burger db.
    burger.selectAll((data) => {
        // This well render all Burgers table data using handlebars.
        const burgerBar = {
          burgers: data,
        };
        res.render('index', burgerBar);
      });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        req.body.newBurgerText,
    ], (result) => {
      res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
  burger.updateOne([
        req.params.id
    ], (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      };
      res.status(200).end();
    }
  );
});

module.exports = router;
