var express = require('express');
var router = express.Router();

let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  dbConnection.query('SELECT * FROM api_learn.user_profile', (error,results,fields) => {
    if(error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});


 

router.post('/profile', (req, res, next) => {

  let {
    username,
    email,
    password,
    first_name,
    last_name,
    job_title,
    salary,
    create_datetime
  } = req.body

  // console.log(req.body);

 
let insertcommand = `INSERT INTO user_profile (username, email, password, first_name,last_name,job_title,salary,create_datetime) VALUES ('${username}','${email}','${password}','${first_name}','${last_name}','${job_title}','${salary}','${create_datetime}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

router.get('/profile', function (req, res, next) {

dbConnection.query('SELECT * FROM api_learn.user_profile', (error, results, fields) => {

    if (error) throw error;

    res.send(results);

});

  //res.send('respond with a resource');

});

router.post('/contact',function(req,res,next){
  console.log(req.body);
  res.send("i am post call");
});


module.exports = router;
