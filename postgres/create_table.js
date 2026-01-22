import { getClient } from "./utils.js"

async function createTable(){
    // users
    const userTable= `
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL

    );
    `
    const client = await getClient();
    await client.query(userTable)
  


    // todos

    // id title description user_id, done-> true false
    const todoTable=`
    CREATE TABLE todos (
        id SERIAL PRIMARY KEY, 
        title TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id),
        done BOOLEAN DEFAULT FALSE
    )
    `
   
    await client.query(todoTable)
    console.log("Both Table  created SUCCESSFULLY");
    
}

createTable();