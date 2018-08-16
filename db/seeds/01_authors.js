exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Albert', bio: 'AAAAAAAAAAAA.'},
        {name: 'Elijah', bio: 'BBBBBBBBBBBB.'},
        {name: 'Nhan', bio: 'CCCCCCCCCCCCCC.'}
      ]);
    });
};
