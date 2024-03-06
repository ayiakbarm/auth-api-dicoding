const UsersTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const UserTableTestHelper = require('../../../../tests/UsersTableTestHelper');
const InvariantError = require('../../../Commons/exceptions/InvariantError');
const RegisterUser = require('../../../Domains/users/entities/RegisterUser');
const RegisteredUser = require('../../../Domains/users/entities/RegisteredUser');
const pool = require('../../database/postgres/pool');
const UserRepositoryPostgres = require('../UserRepositoryPostgres');

describe('UserRepositoryPostgres', () => {
  afterEach(async () => {
    await UserTableTestHelper.cleanTable();
  });

  afterAll(async () => {
    await pool.end();
  });

  describe('verifyAvailableUsername', () => {
    it('should throw InvariantError when username not available', async () => {
      // Arrange
      await UsersTableTestHelper.addUser({ username: 'dicoding' });
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

      // Action and Assert
      await expect(userRepositoryPostgres.verifyAvailableUsername).rejects.toThrowError(
        InvariantError
      );
    });

    it('should throw InvariantError when username are available before', async () => {
      const userRepositoryPostgres = new UserRepositoryPostgres(pool, {});

      // Action and Assert
      await expect(userRepositoryPostgres.verifyAvailableUsername).rejects.toThrowError(
        InvariantError
      );
    });
  });
});
