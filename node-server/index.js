import express from "express"

const app=express()

const port = 3000

app.get("/api/users",(req,res)=>{
  res.send([{id:3,name:'sahaj'},{id:4,name:"rohan"}])
})

app.get("/api/greet",(req,res)=>{
  const name=req.query.name || "guest"
  res.send(`hello,${name}`)
})

app.get("/api/user/:id",(req,res)=>{
  const {id}=req.params
  res.send(`welcome ${id}`)
})

app.get("/",(req,res)=>{
  res.send("server is running ....")
})

app.listen(port,()=>{
    console.log("server is started...")
})