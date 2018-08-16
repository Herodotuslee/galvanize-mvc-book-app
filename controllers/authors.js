
const knex = require('../db/knex.js');




module.exports = {

  landing:(req,res)=>{
    res.render("author")
  },
  post:(req,res)=>{
    knex('authors').insert({
      name:req.body.name,
      bio:req.body.bio
    }).then(()=>{
      res.redirect('/')
    })
  }
}
