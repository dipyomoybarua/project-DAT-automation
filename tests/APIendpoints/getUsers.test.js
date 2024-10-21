const request = require('supertest');
const { BASE_URL } = require('../../config/apiConfig');

describe('GET /users Endpoint', () => {
  it('should fetch a list of users with correct structure and status code', async () => {
    const response = await request(BASE_URL)
      .get('/users?page=1')
      .send();
    
    expect(response.statusCode).toBe(200);
    
    expect(response.body).toHaveProperty('page', 1);
    expect(response.body).toHaveProperty('per_page', 6);
    expect(response.body).toHaveProperty('total', 12);
    expect(response.body).toHaveProperty('total_pages', 2);
    expect(response.body).toHaveProperty('data');
    
    expect(Array.isArray(response.body.data)).toBe(true);
    
    // Assert the structure of each user object
    response.body.data.forEach(user => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('avatar');
    });
  });
});
