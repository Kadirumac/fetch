const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageSchema = new schema({
    name:String,
    message:String
});



const Message = mongoose.model('message',messageSchema)

module.exports=Message