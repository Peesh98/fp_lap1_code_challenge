const request = require('supertest');
const app = require('../app');
const port = 5000;

describe('API Server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(port, () => console.log(`Test server running on port ${port}`));
    });

    afterAll((done) => {
        console.log('Test completed, stopping test server...');
        api.close(done);
    });

    it('Responds to / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });
})