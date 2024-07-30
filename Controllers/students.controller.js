
const { createUserTable, insertDataQuery, getStudents: fetchStudents } = require('../queries');

const getStudents = async(req, res)=>{
  try{
    const client = req.client;
    const students = await client.query("SELECT * FROM users");
    res.send(students.rows)
  }
  catch(e){
    console.log(e)
    throw new Error("Error getting students");
  }
}

module.exports= {
  getStudents
}