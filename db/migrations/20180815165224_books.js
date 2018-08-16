exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table)=>{
    table.increments();
    table.string('title');
    table.string('img_url')
    table.text('desc');
    table.integer('author_id')
      .references('id')
      .inTable('authors')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
