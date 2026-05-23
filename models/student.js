import mongoose from "mongoose";

const Student = mongoose.model("Student",{
    name:{type: String, default:"NoName"},
    department:{type:String, default:"CS&IS"},
    gpa:{type:Number,min:2.0, max:4.0, default:3.0}
}); 

export default Student;