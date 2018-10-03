let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

router.get('/', function(req, res) {  
  res.render('index',{});
});

router.get('/userCheckout', function(req, res) {  
  res.render('userCheckout',{});
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

router.get('/Rings', function(req, res,next) {  
  knex('item_table')
  .where('category','Ring')
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
router.get('/earrings', function(req, res,next) {  
  knex('item_table')
  .where('category','Earring')
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

router.get('/necklace', function(req, res,next) {  
  knex('item_table')
  .where('category','Necklace')
  .then((items)=>{
    res.render('items',{items})
})
.catch((err)=>{
  res.status(500).json({
    status: 'error',
    data: err
  });
});
});
router.get('/low', function(req, res,next) {  
  knex('item_table')
  .orderBy('price')
  .then((items)=>{
    res.render('items',{items})
  })
  
});

router.get('/high', function(req, res,next) {  
  knex('item_table')
  .orderBy('price','desc')
  .then((items)=>{
    res.render('items',{items})
  })
  .catch((err)=>{
    next(err);
  });
});
router.get('/newarrivals', function(req, res,next) {  
  knex('item_table')
  .orderBy('id','desc')
  .then((items)=>{
    res.render('items',{items})
  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/featuredItems', function(req, res,next) {  
  knex('item_table')
  .orderBy('quantity','desc')
  .then((items)=>{
    res.render('items',{items})
  })
  .catch((err)=>{
    next(err);
  });
});


router.get('/bracelets', function(req, res,next) {  
  knex('item_table')
  .where('category','Bracelete')
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

router.get('/checkout', function(req, res,next) {
  let x = [];
  if (!Array.isArray(req.query.itemid)){
    x.push(req.query.itemid);
  }
  else {
    x = req.query.itemid;
  };
  knex('item_table').whereIn('id',x)
  .then((items)=>{
    res.render('checkout',{items})
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