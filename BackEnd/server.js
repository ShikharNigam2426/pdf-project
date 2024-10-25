import express from 'express';

const port = 2000;

const app = express();

app.get('/', (req, res) => {
    res.send('Backend Server is running');
})
app.get('/upload', (req, res) => {
    res.send('File is being uploaded...');
})
app.get('/quiz', (req, res) => {
    res.send('This is a Quiz Page');
})

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
})