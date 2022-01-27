import express from "express";
import { ReturnObject, resizeImage } from "../../utils/utilities";
/* import {Request, Response} from 'express'; */
const images = express.Router();

images.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const filename: string = req.query.filename as string;
      const width = Number(req.query.width as string);
      const height = Number(req.query.height as string);
      let result: ReturnObject = { path: "", message: "", error: 0 };
      result = await resizeImage(filename, width, height);
      if (result.error === 0) {
        res.status(200).sendFile(result.path);
      } else {
        res.status(result.error).send(result.message);
      }
    } catch (e: unknown) {
      if (typeof e === "string") {
        console.log(e);
      } else if (e instanceof Error) {
        console.log(e.message);
      }

      res.status(500).send("internal error");
    }
  }
);

export default images;
