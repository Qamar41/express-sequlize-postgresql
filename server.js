const express = require('express')


const User = require('./models/User')

const userRouter = require('./router/userRoutes')
const catalogRouter = require('./router/catalog')
const productRouter = require('./router/product')



const app = express()
const port = 3000


// const errorMiddleware = (req, res, next)=>{
//     throw new Error('Error my middleware')
// }
app.use(express.json())
app.use(userRouter)
app.use(catalogRouter)
app.use(productRouter)


app.listen(port, ()=>{
    console.log('server is up on port ' + port)
})