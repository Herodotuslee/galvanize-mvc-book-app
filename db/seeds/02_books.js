

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'The Hunger Games (Hunger Games Trilogy, Book 1)', img_url: 'https://images-na.ssl-images-amazon.com/images/I/41jG4xQjjsL._SY346_.jpg', desc:'. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author_id: 1},
        {title: 'Catching Fire (Hunger Games Trilogy, Book 2)', img_url: 'https://images-na.ssl-images-amazon.com/images/I/51tK519fUHL.jpg', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author_id: 2},
        {title: 'Mockingjay (Hunger Games Trilogy, Book 3)', img_url: 'https://images-na.ssl-images-amazon.com/images/I/51zkheo7x8L.jpg', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author_id: 3},
        {title: 'The Maze Runner (The Maze Runner, Book 1) ', img_url: 'https://images-na.ssl-images-amazon.com/images/I/51UU0FLH1wL._SY346_.jpg', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', author_id: 3}
      ]);
    });
};
