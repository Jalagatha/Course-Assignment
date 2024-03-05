import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import bodyParser from 'body-parser';


const users = [
    { username: 'kcf1', password: 'kcf11234' },
    { username: 'kcf2', password: 'kcf21234' },

];
const app = express();
const PORT = 4000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(morgan('dev')); 

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname,'public','login.html'));

});


app.post('/login', (req, res) => {
    const username = req.body.password;
    const password = req.body.password

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.redirect('/courses');
    } else {
        res.redirect('/login');
    }
});


app.get('/courses', (req, res) => {

    res.sendFile(path.join(__dirname,'public','node-course.html'));
});


// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port "http://localhost:4000"`);
});