var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ok');
});
const list = [];
router.post("/",(req,res)=>{

  console = msg
  if (req.body.msg)
    list.push(req.body.name + ': ' + req.body.msg);
  res.json({msgs:list});
});

module.exports = router;
