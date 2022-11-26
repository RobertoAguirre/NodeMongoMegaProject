const express = require('express');
const morgan = require('morgan');


const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');



const app = express();

app.use(express.json());

app.use((req,res, next)=>{
    console.log("hello from the middleware");
    next();
})

app.use((req,res, next)=>{
    req.requestTime = new Date().toISOString();
    next();
})

//3)routes
app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);


/* app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    next();
}); */

//4) start server
const port = 3000;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
}) 

