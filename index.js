const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Greeting= require('./greet');
const flash = require('express-flash')
const session= require('express-session')
const db = require("./db/db")
const dbFunction = require("./db/DbFunction")(db)
 
const app = express()
const greeting = Greeting();
// const dbFunction = DbFunction(db)


app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json()) 
app.use(session({
    secret : "Mbali",
    resave : false,
    saveUninitialized: true,
     cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get('/', async function (req, res) {

    
});



app.post('/calc_bill', async function(req, res){
   
 

res.redirect('/');
});
app.post('/price_plans', async function(req, res){

  
  res.redirect('/');

})


app.get('/price_plans/:id' ,async function(req,res){
 
res.render('/price_plans/:id',{

})
})

app.get('/link_user',async function(req, res){
  let user = req.params.username;
  let counter= await dbFunction.getUserCounter(user)
// await dbFunction.getCounter(user)
  res.render('counter',{user, counter})
  
  });
app.post('/link_user', async function(req, res){

  
  res.redirect('/');

})

const PORT = process.env.PORT || 3011;