const redis = require('redis');

const client = redis.createClient();


const initializeRedis = async() =>{
    client.on('error',(err)=>{
        console.log("Redis Client Error", err);
    })
    await client.connect();
    console.log('Redis client connected');  
}

module.exports = {client,initializeRedis};