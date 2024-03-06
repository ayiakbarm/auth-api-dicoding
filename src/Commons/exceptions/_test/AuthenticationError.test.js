const AuthenticationError = require('../AuthenticationError');

describe('AuthenticationError', () => {
  it('should create an error correctly', () => {
    // Arrange
    const authenticationError = new AuthenticationError('auth error occurs');

    // Assert
    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.message).toEqual('auth error occurs');
    expect(authenticationError.name).toEqual('AuthenticationError');
  });
});
