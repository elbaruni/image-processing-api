import supertest from 'supertest';
import app from '../../../index'

const request = supertest(app);
const validFileName='/api/images?filename=encenadaport&width=100&height=100';
const inValidFileName='/api/images?filename=notExistFile&width=100&height=100'

describe('Test Image Processing API', () => {
    it('gets the Image api endpoint', async () => {
        const response = await request.get(validFileName);               
        expect(response.status).toBe(200);         
        })
    describe('Sharp processing',()=>{
        it('process exist full file ', async () => {
            const response = await request.get(validFileName);  
            expect(response.status).toBe(200); 
            })
        it('expects error for non exist file ', async () => {
        const response = await request.get(inValidFileName);  
        expect(response.status).toBe(404);
            })
        })
    });
