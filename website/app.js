const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const cookies= require("cookie-parser");

app.use(session({secret:"responsabilidad", resave:false, saveUninitialized:false}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.listen(3000,()=>
    console.log("Servidor corriendo en puerto 3000")
);