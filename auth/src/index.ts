import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get("/api/users/me", (req, res) => {
  console.log("I am hit.")
  res.send("This is your profile");
});

app.listen(5000, () => {
  console.log("Auth service is running on port 5000 ...");
});
