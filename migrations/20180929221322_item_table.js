
exports.up = function(knex, Promise) {
    return knex.schema.createTable('item_table', function(table){ 
        table.increments('id').primary();
        table.string('photo')
         table.string('name');
         table.string('category');
         table.integer('quantity');
         table.integer('price');
       })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('item_table');
};
