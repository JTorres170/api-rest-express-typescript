import request from 'supertest';
import app from '../../src/app';

test('returns a list of users', async () => {
  const response = await request(app).get('/users/users');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([
    { id: 1, username: 'Jairo', password: 'Torres', fecha_registro: '12/12/2023' },
    { id: 2, username: 'Gurjant', password: 'Singh', fecha_registro: '02/09/2023' },
  ]);
});

test('adds a new user', async () => {
  const newUser = {
    username: 'Test User',
    password: 'Password123',
    fecha_registro: '01/01/2023'
  };
  const response = await request(app).post('/users/add-user').send(newUser);
  expect(response.status).toBe(200);
  expect(response.body.username).toBe('Test User');
  expect(response.body.password).toBe('Password123');
  expect(response.body.fecha_registro).toBe('01/01/2023');
});

test('deletes a user by id', async () => {
  const response = await request(app).delete('/users/remove-user?id=2');
  expect(response.status).toBe(200);
});

// test('updates a user by id', async () => {
//   const updatedUser = {
//     username: 'Updated User',
//     password: 'Password123',
//   };
//   const response = await request(app).put('/users/update-user?id=1').send(updatedUser);
//   expect(response.status).toBe(200);
// });


