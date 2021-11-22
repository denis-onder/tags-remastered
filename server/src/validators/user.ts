import BadRequestError from '../errors/impl/BadRequestError';
import User, { UserCredentials } from '../domain/User';
import requestBodyValidator from './request';

export const credentialsValidator = (credentials: UserCredentials): void => {
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const trimmedEmail = credentials.email ? credentials.email.trim() : '';
  const trimmedPassword = credentials.password
    ? credentials.password.trim()
    : '';

  if (!trimmedEmail) {
    throw new BadRequestError('Please provide an email address.');
  }

  if (!emailRegex.test(trimmedEmail)) {
    throw new BadRequestError('Please provide a valid email address.');
  }

  if (!trimmedPassword) {
    throw new BadRequestError('Please provide a password.');
  }

  if (trimmedPassword.length < 8) {
    throw new BadRequestError(
      'Please provide a password that contains more than 8 characters.'
    );
  }
};

export default (user: User): void => {
  try {
    requestBodyValidator(user);

    credentialsValidator({
      email: user.email,
      password: user.password,
    });

    const trimmedDisplayName = user.displayName ? user.displayName.trim() : '';

    if (!trimmedDisplayName) {
      throw new BadRequestError('Please provide a valid display name.');
    }

    if (trimmedDisplayName.length < 3) {
      throw new BadRequestError(
        'Please provide a display name that is longer than 3 characters.'
      );
    }
  } catch (error) {
    throw error;
  }
};
