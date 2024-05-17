import  express  from "express";
import cors from 'cors';
const app=express();
import userRouter from './routes/userroutes';
app.use(express.json());
app.use(cors());
app.use('/user',userRouter);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})