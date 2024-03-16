import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
// import fs from 'node:fs';
import courseRouter from "./routes/courseRouter.js";
// import router from './routes/users.js';

const Port=process.env.PORT ||4000;
// const users = JSON.parse(fs.readFileSync('./Models/users.json', 'utf-8'));

// const loginRoute= "./routes/login.js";

const app = express();


const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/api/course',courseRouter);
app.use(morgan('dev')); 

app.get('/login', (req, res) => {
   res.sendFile(path.join(__dirname,'public','login.html'));

});



app.post('/login', (req, res) => {
    let {username,password} = req.body;
    username="ivan";
    password="ivan1234";

    const user = user.find(u => u.username === username && u.password === password);
    if (user==user) {
        res.redirect('/node-course');
        
    } else {
        res.redirect('/login.html?error=1');
    }
});



app.get('/node-course', (req, res) => {
    
        res.sendFile(path.join(__dirname,'public','node-course.html'));
});


// Start the server



app.listen(Port, () => {
  console.log(`Server is running on port "http://localhost:${Port}"`);
});