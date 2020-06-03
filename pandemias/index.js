const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.get('/', (req,res)=>{
    res.render('index');
});
app.get('/enfermedades.hbs', (req,res)=>{
    res.render('enfermedades');
});
app.get('/ebola.hbs', (req,res)=>{
    res.render('ebola');
});
app.get('/vih.hbs', (req,res)=>{
    res.render('vih');
});
app.get('/h1n1.hbs', (req,res)=>{
    res.render('h1n1');
});
app.get('/peste-negra.hbs', (req,res)=>{
    res.render('peste-negra');
});
app.get('/lepra.hbs', (req,res)=>{
    res.render('lepra');
});
app.get('/bubonica.hbs', (req,res)=>{
    res.render('bubonica');
});
app.get('/contacto.hbs', (req,res)=>{
    res.render('contacto');
});
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
})