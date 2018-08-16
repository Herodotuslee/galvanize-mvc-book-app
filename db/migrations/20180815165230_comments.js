exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=>{
    table.increments();
    table.string('commenter_name');
    table.text('comment');
    table.integer('book_id')
      .references('id')
      .inTable('books')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
