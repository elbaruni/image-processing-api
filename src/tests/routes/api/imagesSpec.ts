import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

const validFileName = '/api/images?filename=encenadaport&width=100&height=100';

describe('Test Image Processing API', () => {
  it('gets the Image api endpoint', async () => {
    const response = await request.get(validFileName);
    expect(response.status).toBe(200);
  });
});
