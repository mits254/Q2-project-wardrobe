
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('item_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_table').insert([
        {
          "photo": "https://chicjewelry.com/images/thumbnails/280/373/detailed/10/Blac_Chayna_4_Carat_Rose_Gold_Two_tone_ring.jpg",
          "name": "GOLDEN CRYSTAL EMBEDDED STUD EARRING",
          "category": "Earring",
          "quantity": "2",
          "price": "15",
          //"details": "Length  2 inch",
          
        },
        {
          "photo": "https://dimg.dillards.com/is/image/DillardsZoom/nav/nadri-cubic-zirconia-mini-drop-earrings/04524680_zi_silver.jpg",
          "name": "GOLDEN CRYSTAL EMBEDDED STUD EARRING",
          "category": "Earring",
          "quantity": "1",
          "price": "25",
          // "details": "Length :2 inch "
        },
        {
          "photo": "https://www.ka-gold-jewelry.com/images/v16/home/cat_pendants.jpg",
          "name": "GOLDEN CRYSTAL EMBEDDED STUD EARRING",
          "category": "Necklace",
          "quantity": "1",
          "price": "45",
          // "details": "Length :2 inch "
        },
        { 
          "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBQIIOw-ED8-8xV3C5SVLqZU5WkTZFpYBLKg30lMjikJsjwkU2A",
          "name": "GOLDEN CRYSTAL EMBEDDED STUD EARRING",
          "category": "Bracelete",
          "quantity": "2",
          "price": "18",
          // "details": "Length :2 inch "
      },  
      ]);
    });
};
