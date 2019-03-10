//import configJs from './config/config'
var config = require('./config/config');
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,response) => {
    response.send('Making Call');
});

app.post('/',(req,res) => {
    var options = {
        url: req.body.url,
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            res.send(body);
        }
    })   
});

app.post('/ctanorth',(req,res) => {
    var options = {
        url: config.cta.north.getUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});
app.post('/ctasouth',(req,res) => {
    var options = {
        url: config.cta.south.getUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});
app.post('/weather',(req,res) => {
    var options = {
        url: config.darkSky.getForecastUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});
app.post('/meetups',(req,res) => {
    var options = {
        url: config.meetups.getUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});
app.post('/news',(req,res) => {
    var options = {
        url: config.guardian.getUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});
app.post('/music',(req,res) => {
    var options = {
        url: config.lastFM.getUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});
app.post('/currency',(req,res) => {
    var options = {
        url: config.currencyConverter.getUrl(),
        method: 'GET',
        
      }    
    request(options,(error,response,body)=>{
        console.log(options.url);
        if(error){
            console.log("Error connecting " + error);
        }
        else{
            console.log(response.statusCode + ' ' + response.statusMessage + ' for: ' + options.url);
            //console.log(response.body);
            res.send(body);

        }
    })   
});

app.listen(3000,() => {
    console.log('Listening on 3000');
});