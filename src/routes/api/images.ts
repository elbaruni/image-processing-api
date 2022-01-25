import express from 'express';   
import fs from 'fs';
import path from 'path'
 import sharp   from 'sharp';
const images = express.Router();

images.get('/', async(req, res) => { 
    try{    
    const imagesPath= './src/imgs/' 
    const filename=req.query.filename as string;
    const width=req.query.width as string;
    const height=req.query.height as string;     
    const isFullExist=fs.existsSync(`${imagesPath}full/${filename}.jpg`)
    const isThumbExist=fs.existsSync(`${imagesPath}thumb/${req.query.filename}_${width}_${height}.jpg`)
 
    if(isFullExist) {  
      if(!isThumbExist){
        await sharp(`.${imagesPath}full/${filename}.jpg`).resize(parseInt(width),parseInt( height)).png()
        .toFile(`.${imagesPath}thumb/${req.query.filename}_${width}_${height}.jpg`);        
      }      
      res.status(200).sendFile( `${path.resolve(__dirname, '../../imgs')}/thumb/${req.query.filename}_${width}_${height}.jpg`)
    }else{
      res.status(404).send('Image not found!');  
    }    
    }
    catch(e:any){
      console.log(e.message as string)
      res.status(500).send()     
    }

});

export default images;