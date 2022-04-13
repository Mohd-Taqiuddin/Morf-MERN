const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");


// App config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = 'mongodb+srv://admin:admin@cluster0.ku5el.mongodb.net/testdb?retryWrites=true&w=majority';

app.use(express.json());
app.use(cors());

mongoose.connect(connection_url, {
    useNewUrlParser: true
}).then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// API Endpoints
app.post("/register", (req, res) => {
    const user = req.body;

    User.create(user, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data);
        }
    })
})

app.get("/register", (req, res) => {

    User.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data);
        }
    })
})

app.post("/login", (req, res) => {
    const mail = req.body.email;
    const pwd = req.body.password;

    const query = { email: mail, password: pwd };

    User.find(query, (err, data) => {
        if(err) {
            res.send(err);
        } else {
            if(!data){
                res.send({"data": "USER NOT FOUND!"});
            } else {
                res.send(data);
            }
        }
    })
})

app.get("/", (req, res) => res.status(200).send('RUNNING!!'));

// Listener
app.listen(port, () => console.log(`Server up and running on port ${port}`));