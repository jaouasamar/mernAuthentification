const express = require("express")
const app = express()
const connectDB=require("./config/connectDB")
connectDB()
const user=require("./routes/user.js")
app.use(express.json())
app.use("/user",user)
const PORT=process.env.PORT||5000
app.listen(PORT,err=>err?console.log(err):console.log(`server is up and runnig on port ${PORT}`))
