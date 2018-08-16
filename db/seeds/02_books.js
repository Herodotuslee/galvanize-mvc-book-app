

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'A great book', img_url: 'http://images.saddlebackleather.com/image/upload/w_1280,h_1280,c_fill/Mont_Blanc/SLC/Products/01-30-0053-LG-01.jpg', desc:'a pretty great book', author_id: 1},
        {title: 'A scary book', img_url: 'http://cliparts101.com/files/859/81214070D65A77D05823817AAF801EB1/Book__Scary_Tales_1.png', desc:'super scary book!', author_id: 2},
        {title: 'A dog book', img_url: 'http://www.dogaware.com/Graphics/WestieBooks.jpg', desc:'a pretty great dog book', author_id: 3}
      ]);
    });
};
