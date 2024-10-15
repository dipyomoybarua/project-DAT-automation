const request = require('supertest');
const { BASE_URL } = require('../../config/apiConfig');

describe('POST /users Endpoint', () => {
  it('should add a new user with valid data', async () => {
    const newUser = {
      name: 'morpheus',
      job: 'leader'
    };

    const response = await request(BASE_URL)
      .post('/users')
      .send(newUser);
    
    expect(response.statusCode).toBe(201);
    
    expect(response.body).toHaveProperty('name', newUser.name);
    expect(response.body).toHaveProperty('job', newUser.job);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('createdAt');
    
    expect(typeof response.body.id).toBe('string');
    expect(new Date(response.body.createdAt)).toBeInstanceOf(Date);
  });

  it('should handle missing job field gracefully by omitting it', async () => {
    const incompleteUser = {
      name: 'morpheus'
    };

    const response = await request(BASE_URL)
      .post('/users')
      .send(incompleteUser);
    
    expect(response.statusCode).toBe(201);
    
    expect(response.body).toHaveProperty('name', incompleteUser.name);
    expect(response.body).not.toHaveProperty('job'); 
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('createdAt');
  });
});
