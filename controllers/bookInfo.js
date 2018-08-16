const knex = require('../db/knex.js');


module.exports = {

//   landing: (req, res)=>{
//     knex('books').where('id', req.params.id)
//     .then((book_result)=>{
//       knex('comments').where('book_id', req.params.id)
//     .then((comments_result)=>{
//       // res.send(comments_result[0].created_at)
//       res.render('bookInfo', {book_result: book_result[0], comments_result: comments_result});
//     })
//   })
// }

landing:(req,res)=>{
  knex.select('books.id AS id', 'books.title','books.desc','commenter_name','book_id','img_url','comments.comment','author_id','comments.id AS comment_id' )
  .from('books')
  .leftJoin('comments','books.id','comments.book_id')
  .where('books.id',req.params.id)
  .then((result)=>{
    // res.send(result)
    res.render('bookInfo',{book_result:result})
  })
},
post:(req,res)=>{
  knex('comments').insert({
    commenter_name:req.body.commenter_name,
    comment:req.body.comment,
    book_id:req.params.book_id
  }).then(()=>{
    res.redirect(`/comments/${req.params.book_id}`)
  })
},

  deleteBook:(req,res)=>{
    knex('books').where('id',req.params.book_id).del()
    .then(()=>{
      res.redirect('/')
    })
  },
  deleteComment:(req,res)=>{
    knex('comments').where('id',req.params.comment_id).del()
    .then(()=>{
      res.redirect('/')
    })
  }








}
