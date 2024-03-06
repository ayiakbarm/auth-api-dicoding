const NotFoundError = require('../NotFoundError');

describe('NotFoundError', () => {
  it('should throw an error correctly', () => {
    // Arrange
    const notFoundError = new NotFoundError('not found error occurs');

    // Assert
    expect(notFoundError.statusCode).toEqual(404);
    expect(notFoundError.message).toEqual('not found error occurs');
    expect(notFoundError.name).toEqual('NotFoundError');
  });
});
