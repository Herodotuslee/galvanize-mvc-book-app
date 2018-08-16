
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {commenter_name: 'CA', comment: "AAAAA", book_id:2},
        {commenter_name: 'CB', comment: 'BBBBBB', book_id: 1},
        {commenter_name: 'CC', comment: 'CCCCCC', book_id: 3}
      ]);
    });
};
