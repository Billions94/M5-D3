import express from 'express';
import listEndpoints from 'express-list-endpoints'
// import authorsRouter from './apis/authors/index.js'
import cors from 'cors'


const server = express();
const port = 3001

server.use(cors())
server.use(express.json())


// server.use("/authors", authorsRouter)
console.table(listEndpoints(server))


server.listen(port, ()=> {
    console.log('listening on port', port);
})


console.log('why is this happening to me')