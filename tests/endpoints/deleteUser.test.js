const request = require('supertest');
const { BASE_URL } = require('../../config/apiConfig');

describe('DELETE /users/:id Endpoint', () => {
  it('should delete a user and return 204 No Content', async () => {
    const userIdToDelete = 2;

    const response = await request(BASE_URL)
      .delete(`/users/${userIdToDelete}`)
      .send();
    
    expect(response.statusCode).toBe(204);
    
    expect(response.body).toEqual({});
  });

  
  it('should return 204 No Content even if the user does not exist', async () => {
    const nonExistentUserId = 999;

    const response = await request(BASE_URL)
      .delete(`/users/${nonExistentUserId}`)
      .send();
    
    expect(response.statusCode).toBe(204);
    expect(response.body).toEqual({});
  });
});
