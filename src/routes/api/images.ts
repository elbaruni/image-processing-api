import express from 'express';
import { ReturnObject, resizeImage } from '../../utils/utilities';
import {Request, Response} from 'express';
const images = express.Router();

images.get('/', async (req:Request, res:Response): Promise<void> => {
  try {
    let filename: string = req.query.filename as string;
    let width: number = Number(req.query.width as string);
    let height: number = Number(req.query.height as string);
    let result: ReturnObject = { path: '', message: '', error: 0 };
    result = await resizeImage(filename, width, height);
    if (result.error === 0) {
      res.status(200).sendFile(result.path);
    } else {
      res.status(result.error).send(result.message);
    }
  } catch (e: any) {
    console.log(e.message as string);
    res.status(500).send();
  }
});

export default images;
