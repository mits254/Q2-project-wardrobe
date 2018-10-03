
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('item_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_table').insert([
        {
          "photo": "https://chicjewelry.com/images/thumbnails/280/373/detailed/10/Blac_Chayna_4_Carat_Rose_Gold_Two_tone_ring.jpg",
          "name": "Victoria Diamond Ring",
          "category": "Ring",
          "quantity": "2",
          "price": "2500",
          "weight": "4",
           "length": "3",
           "width": "1",
          "description":"Big diamond embedded in the center makes the ring more beautiful !!"
          
        },
        {
          "photo": "https://dimg.dillards.com/is/image/DillardsZoom/nav/nadri-cubic-zirconia-mini-drop-earrings/04524680_zi_silver.jpg",
          "name": "Crystal Clear Diamond Earring",
          "category": "Earring",
          "quantity": "0",
          "price": "1800",
          "weight": "5",
           "length": "5",
           "width": "2",
          "description":"Diamond is so clear in these earrings, that you can see yourself !!"
        },
        {
          "photo": "https://www.ka-gold-jewelry.com/images/v16/home/cat_pendants.jpg",
          "name": "Gold Pendent with chain",
          "category": "Necklace",
          "quantity": "1",
          "price": "500",
          "weight": "4",
          "length": "3",
          "width": "3",
         "description":"Simple and Elegant Pendent your girlfriend will love it !!"
        },
        { 
          "photo":"https://www.zadok.com/wp-content/uploads/BR858120-1.jpg",
          "name": "Snake Bracelete",
          "category": "Bracelete",
          "quantity": "4",
          "price": "1000",
          "weight": "5",
          "length": "3",
          "width": "2",
          "description":"Don't be scared its a beautiful and non-toxic snake !!"
      },  
      { 
        "photo":"https://i.pinimg.com/originals/4a/98/bc/4a98bc104d852342e74b6a34598e7694.jpg",
        "name": "Floral Bracelete",
        "category": "Bracelete",
        "quantity": "2",
        "price": "1500",
        "weight": "6",
        "length": "3",
        "width": "6",
        "description":"Floral theme"
    },  
    {
      "photo": "https://i.pinimg.com/originals/8b/5d/ea/8b5deaeb04906a36eb5cd1caff13a3a9.jpg",
      "name": "Diamond & Sapphire Necklace",
      "category": "Necklace",
      "quantity": "2",
      "price": "5000",
      "weight": "15",
      "length": "10",
      "width": "5",
     "description":"If you love your wife buy it right now !!"
    },
    {
      "photo": "https://qph.fs.quoracdn.net/main-qimg-d7fd3b1d3673a9d0575e43b9dacba182-c",
      "name": "Crystal Diamond Earring",
      "category": "Earring",
      "quantity": "2",
      "price": "800",
      "weight": "3",
       "length": "3",
       "width": "4",
      "description":" i love the shape!!"
    },
      ]);
    });
};
