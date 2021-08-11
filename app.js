
//taking the modules 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

var axios = require("axios").default;
const https = require("https");

// acquaring the modules
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));




// for using static file
app.use(express.static('public'))


// global variable

var dinoArray = [];
var dinoImageArray =[]



// rendering the website



app.get("/",(req,res)=>{

  const options = {
    "method": "GET",
    "hostname": "alexnormand-dino-ipsum.p.rapidapi.com",
    "port": null,
    "path": "/?paragraphs=40&words=1&format=json",
    "headers": {
      "x-rapidapi-key": "dcc30b2b2fmshac3b7e241a8fc6cp1061bdjsn8937e7e638cb",
      "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
      "useQueryString": true
  }
}
  
  https.get(options, function (response) {  
    response.on("data",function(data){
      const dinoData =  JSON.parse(data);
      for(let j=0 ; j<10 ; j++){
        let i = Math.floor(Math.random()*30);
        const finalname  = dinoData[i];
         dinoArray.push(finalname);
         console.log(finalname)    
      }
      
   
    })
  })


  const request = require('request');

const options2 = {
  method: 'GET',
  url: 'https://bing-image-search1.p.rapidapi.com/images/search',
  qs: {q: 'Dinosour'},
  headers: {
    'x-rapidapi-key': 'dcc30b2b2fmshac3b7e241a8fc6cp1061bdjsn8937e7e638cb',
    'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options2, function (error, response, body) {
	if (error) throw new Error(error);

  const dinoImg =  JSON.parse(body);
for(let j =0 ; j <1 ; j++){
  let i = Math.floor(Math.random()*30);
  const push =  dinoImg.value[i].thumbnailUrl;

  

  console.log(push);
  
  dinoImageArray.push(push)
  
}
  
});




let i = Math.floor(Math.random()*10);

res.render("main",{Name:dinoArray[i],url:dinoImageArray[i]});



  })
  
  
  











//listeing the port 
app.listen(3000, ()=>{
    console.log("server stated on local host 3000");
})