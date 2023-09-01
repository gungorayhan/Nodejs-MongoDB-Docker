const express=require("express")
const bodyParser= require("body-parser")
const cors=require("cors")
const app= express()
const {TodoModel} =require("./TodoModel")
const Mongose = require("mongoose")
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    TodoModel.find({})
    .then((todolist)=>res.status(200).json(todolist))
    .catch((err)=>res.status(500).json(err))
})


app.post("/todo",(req,res)=>{
    const todo = new TodoModel({
        ...req.body,
        created_at:new Date.now()
    })

    todo
    .save()
    .then((saveTodo)=>res.status(200).json(saveTodo))
    .catch((err)=>res.status(500).json(err))
})


app.listen(PORT,()=>{
    console.log("Sunucu Çalışıyor.. MongoDB ye bağlanılacak")
    Mongose.connect("mongodb://mongo-alias:27017/todos",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("MongoDb ye bağlantı başarılı")
})