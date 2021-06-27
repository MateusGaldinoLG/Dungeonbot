import express from "express";

const server = express();
const PORT: number = 3000;

server.all("/", (req, res) =>{
    return res.send("Bot is running")
});

function keepAlive(): void{
    server.listen(PORT, () =>{
        console.log("Server is ready.")
    })
}

export {keepAlive};