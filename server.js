
const env = 'development'
const config = require('./knexfile.js')[env]
const knex = require('knex')(config)
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

require("./config/routes")(app)
//
// app.get('/',(req,res)=>{
//   knex.select()
//   .from('books')
//   .then((result)=>{
//     // res.send(result)
//     res.render('index',{result})
//   }).catch((err) => {
//       console.error(err)
//     });
// })


// app.get('/newBook',(req,res)=>{
//   res.render('newBook')
// })
//
//
// app.post('/newBook', (req, res) => {
//   knex('books').insert({
//       title:req.body.title,
//       img_url:req.body.imgurl,
//       desc:req.body.desc,
//       author_id:req.body.author_id
//
//     })
//     .then(()=>{
//       res.redirect('/');
//     }).catch((err) => {
//       console.error(err)
//     });
// })

app.listen(port, ()=>{
  console.log(`Listening on localhost:${port}`);
})
