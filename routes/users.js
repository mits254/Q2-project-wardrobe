const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('../db/knex');

router.get('/users/:full_name',(req,res, next)=>{
    knex('user_detail')
    .where('full_name',req.params.full_name)
    .then((user)=>{
      if(!user) {
        return "This user doesn't exist";
      }
      res.send(user);
    //   bcrypt.hash(req.body.password, 12)
    //   .then((password) => {
    //     knex('user_detail')
    //     .where('password',req.body.password)
    //     .then((user)=>{

    //         res.send(user);
    //     })
   // })
})
    .catch((err)=>{
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  });


router.post('/users', (req, res, next) => {
    console.log(req.body);

  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('user_detail')
        .insert({
          full_name: req.body.full_name, 
          email: req.body.email,
          password: hashed_password,        
        }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/users/delete/:fullname', (req, res, next) => {
    console.log(req.body);

  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
    knex('user_detail')
        
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});
  

  module.exports = router;