import express from 'express';

const app = express();


app.get("/rota-teste", (req,res) => {
    res.send("teste")
})

app.listen(4000)