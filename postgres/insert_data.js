import { getClient } from "./utils.js";

async function insertData() {
    const client = await getClient();

    // users
    const userData = `
        INSERT INTO users (email, password)
        VALUES ($1, $2)
        RETURNING id
    `;
    const userArr = ['BBBB@gmail.com', '123'];

    const res1 = await client.query(userData, userArr);
    console.log("User inserted successfully");


    // todos
    const user_id = res1.rows[0].id;
    const todoData= `
    INSERT INTO todos(title, description,user_id, done)
    VALUES ($1, $2, $3, $4)
    `;

    const todoArr= ['MERN', 'React',user_id,false]
    const res2= await client.query(todoData,todoArr);
    console.log("Todo data inserted successfully");

    await client.end();
}

insertData();
