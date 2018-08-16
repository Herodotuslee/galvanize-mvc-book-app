
const knex = require('../db/knex.js');




module.exports = {
  getAll:(req,res)=>{
      knex.select()
      .from('books')
      .then((result)=>{
        // res.send(result)
        res.render('index',{result})
      }).catch((err) => {
          console.error(err)
        });
    },
    newBook:(req,res)=>{
        knex.select()
        .from('authors')
        .then((result)=>{
          // res.send(result)
          res.render('newBook',{authors:result})
        }).catch((err) => {
            console.error(err)
          });
      },

    addBook: (req, res) => {
      knex('books').insert({
          title:req.body.title,
          img_url:req.body.imgurl,
          desc:req.body.desc,
          author_id:req.body.author_id

        })
        .then(()=>{
          res.redirect('/');
        }).catch((err) => {
          console.error(err)
        });
    },

}
