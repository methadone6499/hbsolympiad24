const express = require('express')
const app = express()
const mongoose = require("mongoose")
var bodyParser = require('body-parser');
var cors = require('cors');
//get user schema

app.use(express.json());
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
app.use(cors());
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

//import routes
const userRoutes = require("./routes/userRoute");
const formRoutes = require("./routes/formRoute")
const eventRoutes = require("./routes/eventRoute");
//routes
//app.use("/v1/login", loginRoute)
app.use("/v1", userRoutes);
app.use("/v1", formRoutes);
app.use("/v1", eventRoutes);

app.get('/', (req, res) => {
    res.send("Hello from API");
})

/*app.post('/v1/usersignup', async(req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})*/


mongoose.connect("mongodb://127.0.0.1:27017/HBSOlympiad")
.then(()=>{
    console.log("mongodb connect");
})
.catch(()=>{
    console.log("failed");
})