const express=require ('express');
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')

//
const userRouter=require('./src/routers/user');
const categoryRouter=require('./src/routers/category')
const productRouter=require('./src/routers/product')
const orderRouter=require('./src/routers/order')
const paymentRouter=require('./src/routers/payment')
const BannerRouter=require('./src/routers/banners')



const app=express();
//
app.use(express.json());



//
app.use('/user',userRouter);
app.use('/',categoryRouter);
app.use('/',productRouter);
app.use('/',orderRouter);
app.use('/',paymentRouter);
app.use('/',BannerRouter);





mongoose.connect(process.env.DB_URL)
.then(()=>console.log('db connect seccsufly'))
.catch(()=>console.log('db failed'))
app.listen(process.env.PORT,()=>{

    console.log('connect to the server ');

})