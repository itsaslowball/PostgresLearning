const createUserTable = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL
  )
`;

 const insertDataQuery = `
  INSERT INTO users (name, age)
  VALUES ('John Doe', 30), ('Jane Smith', 25)
`;

const getStudents =`
  SELECT * FROM users
`

module.exports = {
  createUserTable,
  insertDataQuery,
  getStudents
};