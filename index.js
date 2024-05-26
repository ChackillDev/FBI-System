import express from 'express';
import chalk from 'chalk'
import path from 'node:path';
import { fileURLToPath } from 'url';
import mainRouter from './src/routes/mainRouter.js';
import fbiRouter from './src/routes/fbiRouter.js';


const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__dirname);

// Middlewares rutas
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(mainRouter,fbiRouter);
app.use(express.static(path.join(__dirname,'src/assets')));

// servidor
app.listen(PORT, ()=>{
    console.log(chalk.bgYellow(`El servidor esta disponible en:`+(chalk.bgCyan.blue(`http://localhost:${PORT}`))))}
);
