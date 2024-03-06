const RegisteredUser = require('../RegisteredUser');

describe('a RegisteredUser entities', () => {
  it('should throw an error when payload did not contain needed proverty', () => {
    // Arrange
    const payload = {
      username: 'dicoding',
      fullname: 'dicoding indonesia',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError(
      'REGISTERED_USER.NOT_CONTAIN_NEEDED_PROVERTY'
    );
  });

  it('should throw an error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      username: true,
      fullname: 'dicoding indonesia',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError(
      'REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should create registeredUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      username: 'dicoding',
      fullname: 'dicoding indonesia',
    };

    // Action
    const { id, username, fullname } = new RegisteredUser(payload);

    // Assert
    expect(id).toEqual(payload.id);
    expect(username).toEqual(payload.username);
    expect(fullname).toEqual(payload.fullname);
  });
});
