
exports.up = function(knex, Promise) {
    return knex.schema.createTable('item_table', function(table){ 
        table.increments('id');
        table.string('photo')
         table.string('name');
         table.string('category');
         table.integer('quantity');
         table.integer('price');
         table.string('details')
        
         
       })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('item_table');
};
