const books = require('../controllers/books.js')
const authors = require('../controllers/authors.js')
const bookInfo = require('../controllers/bookInfo.js')

module.exports = function(app){

  //BOOKS LANDING PAGE
  app.get('/', books.getAll);


  //ADD NEW BOOK PAGE
  app.get('/newBook',books.newBook);
  app.post('/newBook',books.addBook)


  //NEW AUTOHR PAGE
  app.get('/author',authors.landing)
  app.post('/author/post',authors.post)

  //BOOKINFORMATION PAGE
  app.get('/comments/:id',bookInfo.landing)
  app.post('/comments/:book_id',bookInfo.post)
  app.get('/comments/deleteBook/:book_id',bookInfo.deleteBook)
  app.get('/comments/deleteComment/:comment_id',bookInfo.deleteComment)


}
