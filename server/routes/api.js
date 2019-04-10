const express = require ('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/contacts', (req, res, next) => {
  Contact.find({})
    .then(data => res.json(data))
    .catch(next)
});

router.post('/contacts', (req, res, next) => {
  if(req.body.firstName){
    Contact.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input field is empty"
    })
  }
});

router.delete('/contacts/:id', (req, res, next) => {
  Contact.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;