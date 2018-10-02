let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

router.get('/', function(req, res) {  
  res.render('index',{});
});
 
router.get('/items', function(req, res,next) {  
    knex('item_table')
    .orderBy('id')
    .then((items)=>{
      res.render('items',{items})
    
    //   res.render({items});
    //res.send(items);
 })
 .catch((err)=>{
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
});

router.get('/items/:id',(req,res, next)=>{
    knex('item_table').where('id',req.params.id).then((items)=>{
      if(!items) {
        return next();
      }
     // res.render('one_assassin',{assassins});
     res.send(items);
    })
    .catch((err)=>{
      res.status(500).json({
        status: 'error',
        data: err
      });
    })
  });

  router.post('/newItem/add',(req, res, next)=>{
    knex('item_table').insert({photo:req.body.photo ||'https://media.giphy.com/media/ytd9JPP56Hk8o/giphy.gif',
      name : req.body.name, 
      category : req.body.category, 
      quantity :req.body.quantity, 
      price: req.body.price, 
      }, '*')
      .then((items)=>{
        res.send(items);
       // res.redirect(302, '/assassins');
      })
      .catch((err)=>{
        res.status(500).json({
          status: 'error',
          data: err
        });
      })  
  });

  router.patch('/EditItem/:id',(req,res, next)=>{
  
    knex('item_table').where('id',req.params.id).then((items)=>{
      
    knex('item_table').update({photo:req.body.photo ||'https://media2.giphy.com/media/l4pSWRbxwp4Ss2xkQ/giphy.webp',
    name : req.body.name, 
    category : req.body.category, 
    quantity :req.body.quantity, 
    price: req.body.price, }, '*').where('id',req.params.id).then((items)=>{

        res.send(items);
      //res.render('assassins',{assassins});
    });
    })
    .catch((err)=>{
      next(err);
    })
  });  

  router.delete('/delete/:id',(req, res, next)=>{
    let row;
    knex('item_table')
    .where('id',req.params.id)
    .then((items)=>{
      row = items;
    return knex('item_table').del().where('id',req.params.id);
    })
    .then((items)=>{
       delete row.id;
       //res.render('assassins',{row});
       res.send(items);
      //res.render(items)
    })
    .catch((err)=>{
      next(err);
    });
  });  


  

  module.exports = router;