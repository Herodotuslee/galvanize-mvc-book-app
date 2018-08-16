
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {commenter_name: 'Albet', comment: "Nice Book", book_id:2},
        {commenter_name: 'Elijah', comment: 'Amazing', book_id: 1},
        {commenter_name: 'Jake', comment: 'Interesting', book_id: 3}
      ]);
    });
};
