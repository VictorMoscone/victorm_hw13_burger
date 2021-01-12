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

module.exports = router;
