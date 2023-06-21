
import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import router from "./routes/posts.js";
import userRouter from "./routes/users.js";
const app  = express();




app.use(bodyParser.json({ limit:"30mb",extended:true }));
app.use(bodyParser.json({ limit:"30mb",extended:true }));
app.use(cors());


mongoose.set('strictQuery', false);

app.use('/posts',router);
app.use('/user',userRouter);


const CONNECTION_URL = 'mongodb+srv://Viraj:N0TMOAn9hZzYtCUt@cluster0.ssbpou4.mongodb.net/Memory?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT,()=> console.log(`Server is running on port: ${PORT}`)))
.catch((e) => console.log(e));





