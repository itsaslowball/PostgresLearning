
const { query } = require('express');
const queries = require('../queries');

const getStudents = async(req, res)=>{
  try{
    const client = req.client;
    const students = await client.query(queries.getStudents);
    res.send(students.rows)
  }
  catch(e){
    console.log(e)
    throw new Error("Error getting students");
  }
}

const getStudentById = async(req , res) =>{
  const client = req.client;
  const id = parseInt(req.params.id);
  const student = await client.query(queries.getStudentById, [id]);
  res.send(student.rows[0]);
  
}

const addStudent = async(req , res)=>{
  const client = req.client;
  const {name , age} = req.body;
  const student = await client.query(queries.insertDataQuery,[name , age]);
  res.send(student.rows[0]);
}

module.exports= {
  getStudents,
  getStudentById,
  addStudent
}