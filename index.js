const express = require('express');
const { initializeRedis, client } = require('./config/redis.config');

const app = express();


app.use(express.json());

initializeRedis();

// rate limiter using redis !
app.use(async (req, res, next) => {
    try {
        // console.log(req.method, req.path,req.ip);
    const ip = Number(await client.get(req.ip)) || 0;
    // console.log("ip",ip);
    if(ip > 0){
        if(ip >= 10){
            throw new Error("Too many requests from this ip address wait for 1 minute");
        }
        else{
            await client.incr(req.ip); 
        // console.log("Incremented");
        }
    }
    else{
        await client.set(req.ip,1,{EX:60});
        // console.log("Set");
    }

    next(); 
    } catch (error) {
        res.status(429).send({
            message:error.message,
        })
    }   
})

app.get('/', async (req, res) => {

    // await client.set('total_views',0);
    const inc = await client.incr('total_views');
    res.send({
        message:"Hello JavaScript",
        total_views: inc
    });
})






app.listen(4000, () => {
    console.log('Server is running on port 4000');
})