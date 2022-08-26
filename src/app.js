import Express from "express"
import db from "./db/data.js"
import dicas from "./controller/controller.js" 


const app = Express()
app.use(Express.json())


dicas(app, db)

app.listen(3000, ()=>{
    console.log('Servidor rodando no HTTP://localhost3000')
})