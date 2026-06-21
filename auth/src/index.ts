import express from "express";
import bodyParser from "body-parser";

import { currentUserRouter } from "./route/current-user.js";
import { signin } from "./route/signin.js";
import { signout } from "./route/signout.js";
import { signup } from "./route/signup.js";
const app = express();

app.use(bodyParser.json());

app.use(currentUserRouter);
app.use(signin);
app.use(signout);
app.use(signup);

app.listen(5000, () => {
  console.log("Auth service is running on port 5000 ...");
});
