import app from "./app.js";
// const dotenv = require("dotenv");

// dotenv.config({path:""})

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
