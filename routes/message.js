const express = require('express');
const router = express.Router();
const Message = require("../models/messageModel");


router.get('/',(req,res) =>{

     const mes = Message.find()

     mes.then(result =>{
         res.status(200).json(result)
     })
});

router.post('/',(req,res)=>{

    const  {
        name,
        message
    } = req.body;
        const  post = new Message({
            name,
            message
        });

    post.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });

  console.log(req.body);  

})


module.exports = router;
