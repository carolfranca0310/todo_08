const dicas = (app, db) => {
    app.get("/dicas",(req, res)=>{
        res.json({
            dicas: db.dicas[parseInt(Math.random() * db.dicas.length)]
    })
    })

    app.post("/create",(req,res)=>{
        const body = req.body
        db.dicas.push(body.dicas)
        res.json(body)
    })

}

export default dicas