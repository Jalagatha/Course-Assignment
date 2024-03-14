import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';


let isLoggedIn=false
const Port=4000||process.env.PORT ;
let users = [
    { username: 'ivan', password: '1234' },
    { username: 'ivan2', password: '1234' }

];
const app = express();


const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev')); 

app.get('/login', (req, res) => {
   res.sendFile(path.join(__dirname,'public','login.html'));

});


app.post('/login', (req, res) => {
    const {username,password} = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        isLoggedIn = true;
        res.redirect('/node-course');
    } else {
        res.send('Invalid username or password.');
    }
});


app.get('/node-course', (req, res) => {

    const user = isLoggedIn;

    if (user) {
        
        res.sendFile(path.join(__dirname,'public','node-course.html'));
    } else {
        res.send('You Need to Login First');
    }

    
});


// Start the server

app.listen(Port, () => {
  console.log(`Server is running on port "http://localhost:${Port}"`);
});