const mongose = require("mongoose")

const Schema =mongose.Schema;

const todoSchema= new Schema({
    title:String,
    description:String,
    completed:Boolean,
    created_at:Date,

})


module.exports= TodoModel =  mongose.model("todo",todoSchema);