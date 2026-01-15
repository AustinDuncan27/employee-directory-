import express from "express";
const app= express();

app.get("/", (req,res)=>{
  res.send("first run through from memory")
});

app.listen(3000, ()=>{
  console.log("i am the master chief")
})