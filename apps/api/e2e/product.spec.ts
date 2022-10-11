import * as supertest from 'supertest';

const req = supertest('http://localhost:3333/api');

describe('e2e', () => {
  describe('Product Controller', () => {
    it('GET /product  expect status 200, response body list', () => {
      req
        .get('/product')
        .set('Accept', 'appllication/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).not.toBeUndefined();
        });
    });

    it('POST /product should create product', () => {
      req
        .post('/product')
        .send({
          name: '',
        })
        .expect(402)

        .then((res) => {
          console.log('Response ', res.body);
          expect(res.body.message).toBe(
            'name must be longer than or equal to 3'
          );
        });
    });
  });
});
