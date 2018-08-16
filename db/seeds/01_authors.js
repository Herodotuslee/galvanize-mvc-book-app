exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Albert', bio: 'I am Albert'},
        {name: 'Elijah', bio: 'I am cool'},
        {name: 'Nhan', bio: 'I like to sleep .'}
      ]);
    });
};
