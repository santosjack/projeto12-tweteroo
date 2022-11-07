import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const tweets = [];
const users = [];

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(-10));
});

app.post("/sign-up", (req, res) => {
   
    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    };

    users.push(user);

    res.send("OK");
});

app.post("/tweets", (req, res) => {

    const tweet = {
        username: req.body.username,
        tweet: req.body.tweet
    };

    const user = users.find(user => user.username === tweet.username);

    tweets.push({avatar: user.avatar, ...tweet});

    res.send("OK");
});

app.listen(5000);