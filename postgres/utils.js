import { Client } from 'pg'

export async function getClient(){

    const client = new Client({
    user: 'postgres',
    password: 'aditya',
    host: 'localhost',
    port: 5432,
    database: 'basanti',
    })
    
    await client.connect()
    // client.query();
    return client;

}
 




