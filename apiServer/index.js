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

app.post('/cta',(req,res) => {
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
            //console.log(response.body);
            res.send(body);

        }
    })   
});


app.listen(3000,() => {
    console.log('Listening on 3000');
});