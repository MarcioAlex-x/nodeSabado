const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req, res)=>{
    res.render('home')
})
app.get('/sobre',(req, res)=>{
    res.render('sobre')
})
app.get('/contatos',(req, res)=>{
    res.render('contatos')
})

// aqui

app.listen(3000,()=>{
    console.log('Aplicação rodando em http://localhost:3000')
})
