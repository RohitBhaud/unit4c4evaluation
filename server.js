const app = require("./index")
const connect = require("./db")
app.listen(3456 , async()=>{
    try{
        await connect();
        console.log("listening port 3456")
    }
    catch(err){
        console.log(err.message)
    }
})