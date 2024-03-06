const RegisterUser = require('../RegisterUser');

describe('a Register User entities', () => {
  it('should throw an error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY'
    );
  });

  it('should throw an error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: true,
      fullname: 123,
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION'
    );
  });

  it('should throw an error when username contains more than 50 characters', () => {
    // Arrange
    const payload = {
      username: 'dicodingdicodingdicodingdicodingdicodingdicodingdicodingdicodingdicoding',
      password: 'abcde',
      fullname: 'hello world',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
  });

  it('should throw an error when username contains restricted characters', () => {
    const payload = {
      username: 'dico ding',
      password: 'dicoding',
      fullname: 'hello dicoding',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError(
      'REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER'
    );
  });

  it('should create registerUser object correctly', () => {
    const payload = {
      username: 'dicoding',
      password: 'secretpassword',
      fullname: 'dicoding awesome',
    };

    // Action
    const { username, password, fullname } = new RegisterUser(payload);

    // Assert
    expect(username).toEqual(payload.username);
    expect(password).toEqual(payload.password);
    expect(fullname).toEqual(payload.fullname);
  });
});
