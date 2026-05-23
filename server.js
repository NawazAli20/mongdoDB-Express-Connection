import express from 'express'; 
import _ from 'underscore';
import morgan from 'morgan';  
import Connection from './connection.js';
import Student from './models/student.js';

Connection(); //call the Connection function

const app = express(); 
const port = 8080;

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to express!</h1>")
}); 



app.get("/students",async (req,res)=>{
    try{
    const response = await Student.find({});
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

app.get("/insert", async (req,res)=>{
    try{
    const newStudent = {name:"Matt", gpa:3.90};
    const response = await Student.insertOne(newStudent);
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

app.get("/delete", async (req,res)=>{
    try{
    const response = await Student.deleteOne({name:"NoName"});
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});

app.get("/update/:gpa", async (req,res)=>{
    try{
    const gpa = req.params.gpa;
    const response = await Student.updateOne({name:"Matt"},{$set:{gpa:gpa}});
    res.status(200).send(response);
    }catch(err){
        res.status(500).send("Error in fetching students: "+err);
    }
});


app.listen(port,()=>{
    console.log("Express is running at port: "+port);
});


