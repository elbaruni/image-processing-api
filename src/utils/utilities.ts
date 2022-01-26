import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import util from 'util';
export interface ReturnObject {
  path: string;
  message: string;
  error: number;
}
const imagesPath: string = './src/imgs/';
const isExist = util.promisify(fs.exists);
export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<ReturnObject> => {
  let res: ReturnObject = { path: '', message: '', error: 0 };
  if (!filename) {
    res.message = 'Image not found! ';
    res.error = 400;
    return res;
  }

  if (isNaN(width)) {
    res.message = 'width is not a valid number';
    res.error = 400;
    return res;
  }

  if (isNaN(height)) {
    res.message = 'height is not a valid number';
    res.error = 400;
    return res;
  }

  const isFullExist = await isExist(`${imagesPath}full/${filename}.jpg`);
  const isThumbExist = await isExist(
    `${imagesPath}thumb/${filename}_${width}_${height}.jpg`
  );
  if (isFullExist) {
    if (!isThumbExist) {
      await sharp(`${imagesPath}full/${filename}.jpg`)
        .resize(width, height)
        .png()
        .toFile(`${imagesPath}thumb/${filename}_${width}_${height}.jpg`);
    }

    res.path = `${path.resolve(
      __dirname,
      '../imgs'
    )}/thumb/${filename}_${width}_${height}.jpg`;
    res.message = 'resized';
    res.error = 0;
    return res;
  } else {
    res.path = '';
    res.message = 'Image not found!';
    res.error = 404;
    return res;
  }
};
