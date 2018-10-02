
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_detail', function(table){ 
        table.increments('');
        table.string('full_name').unique().notNullable();
         table.string('email').unique().notNullable();
         table.specificType('password', 'char(60)').notNullable();  
         table.timestamps(true, true);        
       })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_detail');
};
