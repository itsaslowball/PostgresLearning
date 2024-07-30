const createUserTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL
  )
`;

 const insertDataQuery = `
  INSERT INTO users (name, age)
  VALUES ($1, $2)
  RETURNING *;
`;

const getStudents =`
  SELECT * FROM users
`
const getStudentById = 'SELECT * FROM users WHERE id = $1';

module.exports = {
  createUserTable,
  insertDataQuery,
  getStudents,
  getStudentById
};