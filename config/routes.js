const books = require('../controllers/books.js')
const authors = require('../controllers/authors.js')
const comments = require('../controllers/comments.js')

module.exports = function(app){

  //BOOKS
  app.get('/', books.getAll);
  app.get('/newBook',books.newBook);
  app.post('/newBook',books.addBook)

  //AUTOHR
  app.get('/author',authors.landing)
  app.post('/author/post',authors.post)

  //BOOKInfo
  app.get('/comments/:id',comments.landing)
  app.post('/comments/:book_id',comments.post)


}
