import express from 'express';
import route from './routes'
 
const app = express();
const port = 3000;
 
app.use('/api',route);
   app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
   });
export default app