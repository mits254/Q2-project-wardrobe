
exports.up = function(knex, Promise) {
    return knex.schema.table('item_table', function(table){ 
        table.integer('weight');
        table.integer('length');
         table.integer('width');
         table.string('description');
    });      
};

exports.down = function(knex, Promise) {
    return knex.schema.table('item_table',(table)=>{
        table.dropColumn('weight');
        table.dropColumn('length');
         table.dropColumn('width');
         table.dropColumn('description');
    });
};
