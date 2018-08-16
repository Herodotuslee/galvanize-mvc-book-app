
const knex = require('../db/knex.js');




module.exports = {

  // landing:(req,res)=>{
  //   res.render("comments")
  // },

  landing: (req, res)=>{
  knex('books').where('id', req.params.id)
  .then((book_result)=>{
    knex('comments').where('book_id', req.params.id)
    .then((comments_result)=>{
      res.render('comments', {book_result: book_result[0], comments_result: comments_result});
    })
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
}
}
