import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDb from './configs/mongodb.js'

// App config
const PORT = process.env.PORT || 4000
const app = express()
await connectDb()

// Initialise middleware
app.use(express.json())
app.use(cors())
// Api routes
app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))
