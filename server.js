const app = require('express')();

app.get('/', (req, res) => {
    res.send("Hello");
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}` );
})