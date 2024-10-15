const request = require('supertest');
const { BASE_URL } = require('../../config/apiConfig');

describe('GET /users/:id Endpoint', () => {
  it('should fetch a single user by ID with correct structure and status code', async () => {
    const userId = 2;
    const response = await request(BASE_URL)
      .get(`/users/${userId}`)
      .send();
    
    expect(response.statusCode).toBe(200);
    
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('support');
    
    const user = response.body.data;
    expect(user).toHaveProperty('id', userId);
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('first_name');
    expect(user).toHaveProperty('last_name');
    expect(user).toHaveProperty('avatar');
  });

  it('should return 404 when user is not found', async () => {
    const nonExistentUserId = 23;
    const response = await request(BASE_URL)
      .get(`/users/${nonExistentUserId}`)
      .send();
    
    expect(response.statusCode).toBe(404);
    
    expect(response.body).toEqual({});
  });
});
