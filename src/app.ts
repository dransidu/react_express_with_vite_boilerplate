import 'dotenv/config';
import express, { Express } from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import MongoDB from "./configs/mongodb.config";
import routes from "./routes";
import path from 'path';

// Initalize express app
const app: Express = express();

// Port
const PORT = process.env.PORT || 8000;

// Mongodb connection
const mongodb = new MongoDB();
mongodb.getConnection();

// Use body-parser
app.use(express.json());


// Use cookie parser
app.use(cookieParser())

// Logger
app.use(morgan("tiny"));

// Api routes
app.use(routes);

app.use('/', express.static(path.join(__dirname, '/public')))

app.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, '/public')
    })
})

// Listen express app
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
